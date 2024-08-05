import { useState } from "react";
import emailjs from "emailjs-com";
import {
  Form,
  Input,
  Label,
  InputWrap,
  Textarea,
  ContextH4,
  ImgInput,
  SubmitBtn,
  ModalContent,
  ModalCloseBtn,
  ModalContainer,
  Modal,
} from "../ContactStyle";

const useModal = () => {
  const [modalContent, setModalContent] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return { modalContent, setModalContent, modalOpen, toggleModal };
};

const useFormInputChange = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    message: "",
    image: null, // 이미지 파일을 저장할 변수
  });

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

  return { formData, setFormData, handleChange };
};

const useFormSubmit = (formData, setFormData, toggleModal, setModalContent) => {
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

  return handleSubmit;
};

// Contact 페이지 모달 컴포넌트
const ContactModal = ({ modalContent, toggleModal }) => {
  return (
    <ModalContainer>
      <Modal>
        <ModalContent>{modalContent}</ModalContent>
        <ModalCloseBtn onClick={toggleModal}>닫기</ModalCloseBtn>
      </Modal>
    </ModalContainer>
  );
};

// Contact 페이지 폼 컴포넌트
function ContactFormAndModal() {
  const { modalContent, setModalContent, modalOpen, toggleModal } = useModal();

  const { formData, setFormData, handleChange } = useFormInputChange();

  const handleSubmit = useFormSubmit(
    formData,
    setFormData,
    toggleModal,
    setModalContent
  );

  return (
    <>
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
          이미지{" "}
          <ImgInput
            name="image"
            accept="image/*"
            onChange={handleChange}
            type="file"
          />
        </Label>
        <ContextH4 color={"gray"}>이미지는 필요 시 첨부</ContextH4>
        <SubmitBtn type="submit">문의하기</SubmitBtn>
      </Form>
      {modalOpen && (
        <ContactModal modalContent={modalContent} toggleModal={toggleModal} />
      )}
    </>
  );
}

export default ContactFormAndModal;
