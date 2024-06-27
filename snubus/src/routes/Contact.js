/** @jsxImportSource @emotion/react */
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  ContextContainer,
  ContextH1,
  Form,
  Input,
  Label,
  InputWrap,
  Textarea,
  ContextH5,
  ImgInput,
  SubmitBtn,
  ModalContainer,
  Modal,
  ModalContent,
  ModalCloseBtn,
} from "./ContactStyle";
import Headers from "./components/Header";
import Footers from "./components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    message: "",
    image: null, // 이미지 파일을 저장할 변수
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // Input 값 입력 시
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      // 파일이 있는 경우 웹 링크로 만들어서 FormData에 저장
      const file = files[0] ? URL.createObjectURL(files[0]) : "이미지 없음";
      setFormData({
        ...formData,
        image: file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // 폼 제출 시
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS에 전달할 데이터
    const templateParams = {
      from_name: formData.from_name,
      user_email: formData.user_email,
      message: formData.message,
      image: formData.image,
    };

    // EmailJS를 통해 이메일 발송
    emailjs
      .send(
        "service_cu4ctaz", // EmailJS에서 발급받은 Service ID
        "template_9ljcutk", // EmailJS에서 설정한 Template ID
        templateParams,
        "fYUyq_r6dfVD0R2eO" // EmailJS에서 발급받은 User ID
      )
      .then(
        // 성공 시
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({
            from_name: "",
            user_email: "",
            message: "",
            image: null,
          });
          setModalContent("성공적으로 제출되었습니다.");
          toggleModal(); // 이메일 발송 후 모달을 엽니다.
        },
        // 실패 시
        (error) => {
          console.log("FAILED...", error);
          setFormData({
            from_name: "",
            user_email: "",
            message: "",
            image: null,
          });
          setModalContent("제출이 실패하였습니다. 다시 한번 시도해보세요!");
          toggleModal(); // 이메일 발송 실패 후 모달을 엽니다.
        }
      );
  };

  // 모달 열고 닫는 함수
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <ContextContainer>
      <Headers isMain={false} />
      <ContextH1>SNUBUS 문의 페이지</ContextH1>
      <ContextH5>
        SNUBUS 이용 중 궁금하신 점, 추가했으면 하시는 기능, 문제 상황 등에 대해
        문의해주세요.
      </ContextH5>
      <ContextH5>
        작성해주신 이메일로 빠른 시일 내에 답변드리겠습니다.
      </ContextH5>
      <Form onSubmit={handleSubmit}>
        <InputWrap width={"100%"}>
          <Label>
            이름{" "}
            <Input
              placeholder="실명이 아니어도 가능"
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
            />
          </Label>
          <br />
          <Label>
            이메일{" "}
            <Input
              placeholder="실제 사용하는 이메일 필요 *"
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </Label>
        </InputWrap>
        <br />
        <InputWrap width={"100%"}>
          <Label>
            문의 내용{" "}
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="문의 내용을 편한 형식으로 적어주세요 :) *"
            />
          </Label>
        </InputWrap>
        <br />
        <Label>
          이미지 첨부 (필요시){" "}
          <ImgInput
            name="image"
            accept="image/*"
            onChange={handleChange}
            type="file"
          />
        </Label>

        <br />
        <SubmitBtn type="submit">문의하기</SubmitBtn>
      </Form>

      {/* 모달 */}
      {modalOpen && (
        <ModalContainer>
          <Modal>
            <ModalContent>{modalContent}</ModalContent>
            <ModalCloseBtn onClick={toggleModal}>닫기</ModalCloseBtn>
          </Modal>
        </ModalContainer>
      )}
      <Footers />
      <br />
    </ContextContainer>
  );
};

export default Contact;
