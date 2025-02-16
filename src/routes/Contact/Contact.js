import { ContextContainer, ContextH1, ContextH4 } from "./ContactStyle";
import Headers from "../components/Header/Header";
import Footers from "../components/Footers/Footer";
import ContactFormAndModal from "./components/ContactFormAndModal";

/* - Contact 컴포넌트
    - 이 컴포넌트가 하는 일 나열
        1. Contact 페이지 렌더링(헤더 메세지, 폼, 푸터, 모달 컴포넌트 렌더링)
        2. 사용자의 input을 받아서, 제출 시 이를 내 Email로 전송, Form 렌더링, 사용자가 제출하기 버튼을 누르면 모달창 렌더링
            1. Component 기능으로 분리 →  ContactFormAndModal 컴포넌트
    - ContactFormAndModal 컴포넌트
        - 이 컴포넌트가 하는 일 나열
            1. 사용자의 input을 받기
                1. Hooks 기능으로 분리 → useFormInputChange() 커스텀 훅으로 분리
            2.  제출 시 이를 내 Email로 전송 후 모달창 열기(setModalContent, toggleModal)
                1. Hooks 기능으로 분리 → useFormSubmit() 커스텀 훅으로 분리
            3. Form 렌더링
                1. ContactFormAndModal 컴포넌트 내부
            4. 모달 관련 상태 및 함수 
                1. Hooks 기능으로 분리 → useModal() 커스텀 훅으로 분리
            5. 모달창 렌더링
                1. Component 기능으로 분리 →  ContactModal 컴포넌트 */

// Contact 컴포넌트
const Contact = () => {
  return (
    <ContextContainer>
      <Headers isMain={false} />
      <ContextH1>SNUBUS 문의 페이지</ContextH1>
      <ContextH4>
        SNUBUS 이용 중 궁금하신 점, 추가했으면 하시는 기능, 문제 상황 등에 대해
        문의해주세요.
      </ContextH4>
      <ContactFormAndModal />
      <Footers />
    </ContextContainer>
  );
};

export default Contact;
