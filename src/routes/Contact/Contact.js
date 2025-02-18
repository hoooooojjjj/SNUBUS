import { ContextContainer, ContextH1, ContextH4 } from "./ContactStyle";
import Headers from "../components/Header/Header";
import Footers from "../components/Footers/Footer";
import ContactFormAndModal from "./components/ContactFormAndModal";

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
