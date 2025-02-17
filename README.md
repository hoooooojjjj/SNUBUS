<div style="font-family: 'Kanit', sans-serif;">
      <article style="max-width: 64rem; margin: 0 auto; spacing: 2rem;">
        <header style="spacing: 1rem;">
          <h1 style="font-size: 2.25rem; font-weight: bold;">프로젝트 이름</h1>
         <div style="font-weight: 700; color: #fff; text-shadow: 0 0 15px rgba(255, 255, 255, 0.34); font-family: 'Kanit', sans-serif; font-size: 2.1875rem;">
  SNUBUS</div>
        </header>
         <section style="spacing: 1rem;">
          <h2 style="font-size: 1.5rem; font-weight: 600;">🔗 프로덕트 링크</h2>
          <div style="font-weight: 700; color: #61DAFB; text-shadow: 0 0 15px rgba(97, 218, 251, 0.34); font-family: 'Kanit', sans-serif; font-size: 18px; margin: 10px 0;">
  <a href="https://snubus.vercel.app/" style="color: inherit; text-decoration: none;">SNUBUS 보러가기</a>
</div>
        </section>
        <section style="spacing: 1rem;">
          <h2 style="font-size: 1.5rem; font-weight: 600;">📋 주요 기능</h2>
          <ul style="list-style-type: disc; list-style-position: inside; spacing: 0.5rem; color: #FFFFFF;">
            <li>지도 위에 실시간 버스 위치 및 정보, 정류장 위치 제공</li>
            <li>각 버스 정류장 라인 제공 - 도착 예정 시간, 운행 지역 / 시간 / 운행 정보 제공</li>
            <li>지도 위에 각 버스 경로선 폴리라인 제공</li>
          </ul>
        </section>  
        <section style="spacing: 1rem;">
          <h2 style="font-size: 1.5rem; font-weight: 600;">🔧 기술 스택</h2>
          <ul style="list-style-type: disc; list-style-position: inside; spacing: 0.5rem; color: #FFFFFF;">
          <div style="font-weight: 700; color: #fff; font-family: 'Kanit', sans-serif; font-size: 1.5rem;">
  Front-end</div><br/>
<div>
<img src="https://skillicons.dev/icons?i=js,html,css,react,redux,emotion,vercel" />

</div>

 <div style="font-weight: 700; color: #fff; font-family: 'Kanit', sans-serif; font-size: 1.5rem;"><br/>
  Back-end</div><br/>
<img src="https://skillicons.dev/icons?i=nodejs,express,aws" />
<div>
</div>
<br/>
 <div style="font-weight: 700; color: #fff; font-family: 'Kanit', sans-serif; font-size: 1.5rem;">
  API</div><br/>
kakaoMaps, 서울특별시_버스위치정보조회 API(공공데이터), 서울특별시_버스도착정보조회 API, (공공데이터), Directions API
<div>
</div>
        <section style="spacing: 1rem;">
          <h2 style="font-size: 1.5rem; font-weight: 600;">🌠 트러블 슈팅</h2>
          <div style="font-family: 'Kanit', sans-serif;">
      <article style="max-width: 64rem; margin: 0 auto; spacing: 2rem;">
          <ul style="list-style-type: disc; list-style-position: inside; spacing: 0.5rem; color: #FFFFFF;">
            <li>CORS 에러 해결
              <ul style="margin-left: 20px; color: #CCCCCC;">
                <li>node + express로 프록시 서버 구축</li>
                <li><a href="https://blog.naver.com/so_no7/223511697593" style="color: #61DAFB; text-decoration: none;">해결 과정 블로그</a></li>
              </ul>
            </li><br/>
            <li>WGS84 좌표계를 통한 지도 버스 위치 표시 (카카오맵)
              <ul style="margin-left: 20px; color: #CCCCCC;">
                <li>네트워크 분석 및 window 객체 검증을 통해 React 환경에 맞게 지도 렌더링, 사용자 이탈률 감소에 기여.</li>
                <li><a href="https://blog.naver.com/so_no7/223440534340" style="color: #61DAFB; text-decoration: none;">해결 과정 블로그</a></li>
              </ul>
            </li><br/>
            <li>버스 위치 데이터 실시간으로 업데이트하기 
              <ul style="margin-left: 20px; color: #CCCCCC;">
                <li>공공데이터 응답에서 캐시 설정을 해놨었음. 응답헤더 확인 → cache: "no-store”</li>
                <li><a href="https://blog.naver.com/so_no7/223445185624" style="color: #61DAFB; text-decoration: none;">해결 과정 블로그</a></li>
              </ul>
            </li><br/><li>Emotion을 사용한 이유
              <ul style="margin-left: 20px; color: #CCCCCC;">
                <li>DX 향상(js 코드 사용 가능, css props 가능)과 객체형 css 코드 사용을 위해</li>
                <li><a href="https://blog.naver.com/so_no7/223450284228" style="color: #61DAFB; text-decoration: none;">해결 과정 블로그</a></li>
              </ul>
            </li><br/><li>부모 컴포넌트(Main) state 변경시 하위 컴포넌트(Overlay) 리렌더링 안되는 문제
              <ul style="margin-left: 20px; color: #CCCCCC;">
                <li>Virtual DOM의 Diffing과 Reconciliation 원리 파악 , key 속성 활용</li>
                <li><a href="https://blog.naver.com/so_no7/223452554678" style="color: #61DAFB; text-decoration: none;">해결 과정 블로그</a></li>
              </ul>
            </li><br/><li>오픈소스 라이브러리 기여 후기
              <ul style="margin-left: 20px; color: #CCCCCC;">
                <li>Ant Design - Carousel 컴포넌트 arrows props 에러 해결 기여</li>
                <li><a href="https://blog.naver.com/so_no7/223456153103" style="color: #61DAFB; text-decoration: none;">해결 과정 블로그</a></li>
              </ul>
            </li><br/><li>view 페이지에서 로딩창 UI “기술적으로” 향샹시키기
              <ul style="margin-left: 20px; color: #CCCCCC;">
                <li>카카오맵(Map 컴포넌트)이 완전히 렌더링된 뒤에 로딩창 띄워야 하는 문제</li>
                <li><a href="https://blog.naver.com/so_no7/223456469208" style="color: #61DAFB; text-decoration: none;">해결 과정 블로그</a></li>
              </ul>
            </li><br/><li>버스 경로선(폴리라인) 좌표 최적화하기
              <ul style="margin-left: 20px; color: #CCCCCC;">
                <li>Google Directions API로 세분화된 경로 좌표를 도출. 실제 도로에 맞는 경로선을 최적화하여 버스 노선 정보 제공.</li>
                <li><a href="https://blog.naver.com/so_no7/223466838652" style="color: #61DAFB; text-decoration: none;">해결 과정 블로그</a></li>
              </ul>
            </li><br/>
            <li>버스 경로선(폴리라인) 좌표 구체화하기
              <ul style="margin-left: 20px; color: #CCCCCC;">
                <li>forEach()에서의 비동기 동작 방식 / console.log()로 객체 출력 시 주의할 점</li>
                <li><a href="https://blog.naver.com/so_no7/223467249316" style="color: #61DAFB; text-decoration: none;">해결 과정 블로그</a></li>
              </ul>
            </li><br/>
            <li>정류장 라인 만들고 라인에 버스 위치 정보 표시하기
              <ul style="margin-left: 20px; color: #CCCCCC;">
                <li>버스 정류장 간 직선 거리와 이동 비율을 산출하여, 각 구간별 버스 이동 비율을 시각화하는 정류장 라인 UI를 구현.</li>
                <li><a href="https://blog.naver.com/so_no7/223508295420" style="color: #61DAFB; text-decoration: none;">해결 과정 블로그</a></li>
              </ul>
            </li><br/>
            <li>view 페이지에서 불필요한 네트워크 요청 발생(성능 최적화)
              <ul style="margin-left: 20px; color: #CCCCCC;">
                <li>AbortController로 컴포넌트 언마운트시 요청 취소 구현</li>
                <li><a href="https://blog.naver.com/so_no7/223509824501" style="color: #61DAFB; text-decoration: none;">해결 과정 블로그</a></li>
              </ul>
            </li><br/>
            <li>getBusData()와 getStationData() 직렬 요청으로 응답 시간 오래걸리는 문제 (성능 최적화)
              <ul style="margin-left: 20px; color: #CCCCCC;">
                <li>Promise.all로 병렬처리해서 응답속도 단축</li>
                <li><a href="https://blog.naver.com/so_no7/223510529624" style="color: #61DAFB; text-decoration: none;">해결 과정 블로그</a></li>
              </ul>
            </li>
          </ul>
      </article>
    </div>
        </section><section style="spacing: 1rem;">
          <h2 style="font-size: 1.5rem; font-weight: 600;">🔍 회고</h2>
          <h3>1. 주요 성과</h3>
          <ul>
            <li>사용자 중심의 기능 구현: 실시간 버스 위치 추적, 도착 예정 시간 안내 등 사용자들이 필요로 하는 기능을 우선적으로 개발</li>
            <li>기술 스택 활용 능력 향상: React, Node.js, AWS 등 다양한 기술을 프로젝트에 적용하며 전반적인 개발 역량을 강화</li>
            <li>협업과 커뮤니케이션: 사용자 피드백을 적극 수렴하고, 오픈소스 기여를 통해 개발자 커뮤니티와의 소통 능력을 향상</li>
          </ul>
          <h3>2. 향후 계획</h3>
          <ul>
            <li>기능 확대: 사용자들의 다양한 요구를 반영하여 정류장 주변 정보 제공, 즐겨찾기 기능 등 추가적인 서비스를 개발할 예정</li>
            <li>성능 최적화: 데이터 처리 속도 향상과 서버 부하 감소를 위한 최적화 작업을 지속적으로 수행할 계획</li>
          </ul>
          <br/>
          <strong>SNUBUS 프로젝트는 단순한 교통 정보 제공을 넘어, 서울대 학생분들의 캠퍼스 생활을 더욱 편리하게 만들기 위한 프로젝트입니다.</strong>
        </section>
        </section>
      </article>
    </div>
