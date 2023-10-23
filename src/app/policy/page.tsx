import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "하루쓰기 | 이용약관",
  description: "당신의 하루를 작성하세요",
  openGraph: {
    title: "하루쓰기",
    description: "NextJS 기반 웹 일기 서비스",
    siteName: "하루쓰기",
    images: [{ url: "/opengraph_image.png", width: 800, height: 400 }],
    type: "website",
  },
};

export default function Policy() {
  return (
    <>
      <main className="p-policy-main">
        <div className="p-policy-header">
          <h2 className="p-policy-title">하루쓰기 서비스 이용약관</h2>
          <div className="p-policy-date-container__outer">
            <div className="p-policy-date-container">
              <select className="p-policy-date-container-select">
                <option value="0">2023.09.19</option>
              </select>
            </div>
          </div>
        </div>

        <div className="p-policy-link-container">
          <div className="p-policy-link-container__inner">
            <ol>
              <li>
                <Link href="/policy/#제1조">제1조 (목적)</Link>
              </li>
              <li>
                <Link href="/policy/#제2조">제2조 (이용자의 정의)</Link>
              </li>
              <li>
                <Link href="/policy/#제3조">제3조 (계정 생성)</Link>
              </li>
              <li>
                <Link href="/policy/#제4조">제4조 (서비스의 제공)</Link>
              </li>
              <li>
                <Link href="/policy/#제5조">제5조 (서비스의 중단 및 변경)</Link>
              </li>
              <li>
                <Link href="/policy/#제6조">
                  제6조 (계정 탈퇴 및 자격 상실 등)
                </Link>
              </li>
              <li>
                <Link href="/policy/#제7조">제7조 (이용자에 대한 통지)</Link>
              </li>
              <li>
                <Link href="/policy/#제8조">제8조 (이용자의 개인정보)</Link>
              </li>
              <li>
                <Link href="/policy/#제9조">제9조 (회사의 의무)</Link>
              </li>
              <li>
                <Link href="/policy/#제10조">
                  제10조 (이용자의 개인 정보에 대한 의무)
                </Link>
              </li>
              <li>
                <Link href="/policy/#제11조">제11조 (이용자의 의무)</Link>
              </li>
              <li>
                <Link href="/policy/#제12조">
                  제12조 (공개 일기의 삭제 또는 이용 제한)
                </Link>
              </li>
              <li>
                <Link href="/policy/#제13조">
                  제13조 (저작권의 귀속 및 일기의 이용)
                </Link>
              </li>
              <li>
                <Link href="/policy/#제14조">
                  제14조 (광고 게재 및 광고주와의 거래)
                </Link>
              </li>
              <li>
                <Link href="/policy/#제15조">제15조 (약관의 개정)</Link>
              </li>
              <li>
                <Link href="/policy/#제16조">제16조 (재판관할)</Link>
              </li>
              <li>
                <Link href="/policy/#제17조">제17조 (개정 전 고지의무)</Link>
              </li>
            </ol>
          </div>
        </div>

        <div className="p-policy-term-container">
          <span className="p-policy-caution">
            ※ 포트폴리오 목적으로 개발한 웹 서비스입니다. 아래 이용약관을
            엄격하게 적용하진 않지만, 기본적인 유지보수를 위해서 적절한 조치를
            취하겠습니다.
          </span>
          <h3 id="제1조">제1조 (목적)</h3>
          <p>
            본 약관은 하루쓰기(이하 ‘회사’)가 제공하는 하루쓰기 및 하루쓰기 관련
            제반 서비스(이하 ‘하루쓰기’)의 이용과 관련하여 회사와 이용자의 권리,
            의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
          </p>
          <h3 id="제2조">제2조 (이용자의 정의)</h3>

          <p>
            ‘이용자’란 본 약관에 동의하고 회사가 제공하는 서비스를 이용하는
            이용자를 통칭합니다.
          </p>
          <h3 id="제3조">제3조 (계정 생성)</h3>
          <ol>
            <li>
              ① 계정을 생성하고자 하는 이용자는 회사가 정한 회원가입 양식을
              기입하고 ‘동의’, ‘확인’ 등의 버튼을 누르는 방법으로 ‘회원가입
              신청’을 할 수 있습니다.
            </li>
            <li>
              ② 회사는 제1항과 같이 회원가입을 신청한 이용자가 다음 각 호에
              해당하지 않는 한 이용자의 계정 생성을 허용합니다.
              <ol>
                <li>1. 등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                <li>
                  2. 제6조 제3항에 해당하는 회원 자격 제한 및 정지, 상실을 한
                  경험이 있었던 경우
                </li>
                <li>
                  3. 기타 계정 생성을 허용하는 것이 회사의 서비스 운영 및 기술상
                  현저히 지장이 있다고 판단되는 경우
                </li>
              </ol>
            </li>
            <li>
              ③ ‘회원가입 신청’의 성립 시기는 회사의 승낙이 이용자에게 도달한
              시점으로 합니다.
            </li>
            <li>
              ④ 이용자는 제1항에서 기재한 내용에 변경이 발생한 경우, 즉시
              변경사항을 정정해 기재하여야 합니다.
            </li>
          </ol>
          <h3 id="제4조">제4조 (서비스의 제공)</h3>
          <ol>
            <li>
              ① 회사는 이용자에게 아래와 같은 서비스를 제공합니다.
              <ol>
                <li>1. 커뮤니티 서비스 (모두의 하루 등)</li>
                <li>2. 검색, 나의 하루 서비스</li>
                <li>
                  3. 기타 회사가 자체 개발하거나 다른 회사와의 협력 계약 등을
                  통해 이용자들에게 제공할 일체의 서비스
                </li>
              </ol>
            </li>
            <li>
              ② 회사는 이용자에게 아래와 같은 서비스를 제공합니다
              <ol>
                <li>1. 개인화 서비스 (나의 하루 등)</li>
              </ol>
            </li>
          </ol>
          <h3 id="제5조">제5조 (서비스의 중단 및 변경)</h3>
          <ol>
            <li>
              ① 회사는 365일, 24시간 원활한 서비스 제공을 위해 최선을 다하고
              있습니다. 다만, 컴퓨터 등 정보통신 설비의 보수 점검, 교체 및 고장,
              통신 두절 등의 사유가 발생한 경우 일부 또는 전체 서비스의 제공을
              제한하거나 중단할 수 있습니다.
            </li>
            <li>
              ② 회사는 제1항에 의한 일부 서비스 제한 및 중단에 대해 예측 가능한
              경우 상당 기간 전에 이를 안내하며, 예측 불가능한 경우라면 지체
              없이 상세히 설명하고 안내드리겠습니다. 또한, 서비스 종료의 경우에
              회사는 제7조에서 정한 방법으로 이용자에게 통지합니다. 단, 회사가
              통제할 수 없는 사유로 인한 서비스의 중단(시스템 관리자의 고의,
              과실이 없는 디스크 장애, 시스템 다운 등)으로 인하여 사전 통지가
              불가능한 경우에는 예외로 합니다. 이러한 경우에도 회사가 상황을
              파악하는 즉시 최대한 빠른 시일 내에 서비스를 복구하도록
              노력하겠습니다.
            </li>
          </ol>
          <h3 id="제6조">제6조 (계정 탈퇴 및 자격 상실 등)</h3>
          <ol>
            <li>
              ① 이용자는 회사에 언제든지 자신이 보유한 계정의 탈퇴를 요청할 수
              있으며 회사는 위 요청을 받은 즉시 해당 계정 탈퇴를 위한 절차를
              밟습니다.
            </li>
            <li>
              ② 계정 탈퇴가 이루어진 경우 이용자의 일기 중 개인 영역(나의 하루
              서비스)에 등록된 일기 일체는 삭제됩니다. 다만, 커뮤니티 서비스,
              기타 공용 게시판 등에 등록된 일기은 삭제되지 않습니다.
            </li>
            ③ 이용자가 다음 각 호의 사유에 해당하는 경우, 회사는 이용자의 자격을
            적절한 방법으로 제한 및 정지, 상실시킬 수 있습니다.
            <ol>
              <li>1. 회원 신청 시에 허위 내용을 등록한 경우</li>
              <li>
                2. 다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등
                전자거래질서를 위협하는 경우
              </li>
              <li>
                3. 서비스를 이용하여 법령과 본 약관이 금지하거나 공서양속에
                반하는 행위를 하는 경우
              </li>
            </ol>
            <li>
              ④ 회사가 이용자의 자격을 상실시키기로 결정한 경우에는 등록된
              계정을 말소합니다.
            </li>
          </ol>
          <h3 id="제7조">제7조 (이용자에 대한 통지)</h3>
          <p>
            회사가 전체 이용자에 대한 통지를 하는 경우 7일 이상 공지사항
            게시판에 게시함으로써 개별 통지에 갈음할 수 있습니다.
          </p>
          <h3 id="제8조">제8조 (이용자의 개인정보)</h3>
          <p>
            회사는 서비스를 제공하기 위하여 관련 법령의 규정에 따라 이용자로부터
            최소한의 개인정보만 수집합니다. (개인정보에 대한 개별 항목은
            개인정보처리방침에서 고지)
          </p>
          <h3 id="제9조">제9조 (회사의 의무)</h3>
          <ol>
            <li>
              ① 회사는 법령과 본 약관이 금지하거나 공서양속에 반하는 행위를 하지
              않으며 본 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스를
              제공하기 위해서 노력합니다.
            </li>
            <li>
              ② 회사는 이용자가 안전하고 편리하게 서비스를 이용할 수 있도록
              시스템을 구축합니다.
            </li>
            <li>
              ③ 회사는 이용자가 원하지 않는 영리목적의 광고성 이메일을 발송하지
              않습니다.
            </li>
            <li>
              ④ 회사는 이용자가 서비스를 이용함에 있어 회사의 고의 또는 과실로
              인하여 손해를 입게 될 경우 관련 법령에 따라 이용자의 손해를 배상할
              책임이 있습니다.
            </li>
            <li>
              다만, 회사의 과실 없이 천재지변 또는 이에 준하는 불가항력으로
              인하여 회사가 서비스를 제공할 수 없거나 이용자의 고의 또는 과실로
              인하여 서비스를 이용할 수 없어 발생한 손해에 대해서는 책임을
              부담하지 않습니다.
            </li>
            <li>
              또한, 회사의 서비스를 매개로 한 이용자 상호 간의 의견 교환, 거래
              등에서 발생한 손해나 이용자가 서비스 상에 게재된 타인의 일기 등의
              콘텐츠를 신뢰함으로써 발생한 손해에 대해서도 회사는 특별한 사정이
              없는 한 이에 대해 책임을 부담하지 않습니다.
            </li>
          </ol>
          <h3 id="제10조">제10조 (이용자의 개인 정보에 대한 의무)</h3>
          <ol>
            <li>
              ① 회사가 관계법령, ‘개인정보보호 정책’에 의해서 그 책임을 지는
              경우를 제외하고, 회원 신청 시 기입한 자신의 ‘하루쓰기 개인 식별
              이메일’(이하 ‘식별 이메일’)와 비밀번호에 관한 관리 책임은 각
              이용자에게 있습니다.
            </li>
            <li>
              ② 이용자는 자신의 식별 코드 및 비밀번호를 제3자에게 이용하게
              해서는 안 됩니다.
            </li>
            <li>
              ③ 이용자는 자신의 식별 코드 및 비밀번호를 도난당하거나 제3자가
              사용하고 있음을 인지한 경우에는 바로 회사에 통보하고 회사의 안내가
              있는 경우에는 그에 따라야 합니다.
            </li>
          </ol>
          <h3 id="제11조">제11조 (이용자의 의무)</h3>
          <ol>
            <li>
              ① 이용자는 다음 각 호의 행위를 하여서는 안 됩니다.
              <ol>
                <li>1. 회원 신청 또는 변경 시 허위 내용을 등록하는 행위</li>
                <li>
                  2. 회사 및 제3자의 지적재산권, 저작권을 침해하거나 회사의
                  권리와 업무 또는 제3자의 권리와 활동을 방해하는 행위
                </li>
                <li>3. 다른 이용자의 식별 이메일을 도용하는 행위</li>
                <li>
                  4. 관련 법령에 의하여 전송 또는 게시가 금지되는 정보(컴퓨터
                  프로그램, 불법 유해 정보 등)의 게시 또는 전송하는 행위
                </li>
                <li>
                  5. 회사의 직원 또는 서비스의 관리자를 가장하거나 타인의 명의를
                  도용하여 정보를 게시, 전송하는 행위
                </li>
                <li>
                  6. 컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인
                  가동을 방해, 파괴할 목적으로 고안된 소프트웨어 바이러스, 기타
                  다른 컴퓨터 코드, 파일, 프로그램을 포함하고 있는 자료를
                  게시하거나 전송하는 행위
                </li>
                <li>7. 스토킹(stalking) 등 다른 이용자를 괴롭히는 행위</li>
                <li>
                  8. 다른 이용자 및 제3자에 대한 개인정보를 그 동의 없이 수집,
                  저장, 공개하는 등의 개인정보 침해 행위 및 명예훼손을 하는 행위
                </li>
                <li>
                  9. 불특정 다수의 자를 대상으로 하여 광고 또는 선전을
                  게시하거나 음란물, 청소년 유해매체물, 불법촬영물 등을 게시하는
                  행위
                </li>
                <li>
                  10. 회사가 제공하는 하루쓰기 및 관련 서비스에 게시된 공지사항
                  규정을 위반하는 행위
                </li>
              </ol>
            </li>
            <li>
              ② 제1항에 해당하는 행위를 한 이용자가 있을 경우 회사는 본 약관
              제6조 제3항에서 정한 바에 따라 이용자의 서비스 이용 자격을 적절한
              방법으로 제한 및 정지, 상실시킬 수 있습니다.
            </li>
            <li>
              ③ 이용자는 그 귀책사유로 인하여 회사나 다른 이용자가 입은 손해를
              배상할 책임이 있습니다.
            </li>
          </ol>
          <h3 id="제12조">제12조 (공개 일기의 삭제 또는 이용 제한)</h3>
          <ol>
            <li>
              ① 이용자의 공개 일기의 내용이 다음 각 호에 해당하는 경우 회사는
              해당 공개 일기에 대한 접근을 임시적으로 차단하는 조치를 취할 수
              있고, 7일 이내에 각 호의 동일 사례가 2회 이상 반복되는 경우 해당
              일기을 삭제 또는 해당 이용자의 이용 자격을 제한, 정지 또는
              상실시킬 수 있습니다.
              <ol>
                <li>
                  1. 다른 이용자 또는 제3자를 비방하거나 중상모략으로 명예를
                  손상시키는 내용
                </li>
                <li>
                  2. 음란물, 청소년 유해매체물, 불법촬영물, 욕설 등 공서양속에
                  위반되는 내용의 정보, 문장, 도형 등을 유포하는 내용
                </li>
                <li>
                  3. 범죄행위, 불법 유해 정보와 관련이 있다고 판단되는 내용
                </li>
                <li>
                  4. 다른 이용자 또는 제3자의 저작권 등 기타 권리를 침해하는
                  내용
                </li>
                <li>
                  5. 종교적, 정치적 분쟁을 야기하는 내용으로서, 이러한 분쟁으로
                  인하여 회사의 업무가 방해되거나 방해되리라고 판단되는 경우
                </li>
                <li>
                  6. 타인의 개인정보, 사생활을 침해하거나 명예훼손을 시키는 경우
                </li>
                <li>
                  7. 동일한 내용을 중복하여 다수 게시하는 등 게시의 목적에
                  어긋나는 경우
                </li>
                <li>
                  8. 불필요하거나 승인되지 않은 광고, 판촉물을 게재하는 경우
                </li>
              </ol>
            </li>
            <li>
              ② 이용자의 공개 일기로 인한 법률상 이익 침해를 근거로, 다른 이용자
              또는 제3자가 이용자 또는 회사를 대상으로 하여 민형사상의 법적
              조치(예: 고소, 가처분 신청, 손해배상청구소송)를 취하는 동시에 법적
              조치와 관련된 일기의 삭제를 요청해오는 경우, 회사는 동 법적 조치의
              결과(예: 검찰의 기소, 법원의 가처분 결정, 손해배상 판결)가 있을
              때까지 관련 일기에 대한 접근을 잠정적으로 제한할 수 있습니다.
            </li>
          </ol>

          <h3 id="제13조">제13조 (저작권의 귀속 및 일기의 이용)</h3>

          <ol>
            <li>
              ① 회사가 작성한 저작물에 대한 저작권, 기타 지적재산권은 회사에
              귀속합니다.
            </li>
            <li>
              ② 이용자는 회사가 제공하는 서비스를 이용함으로써 얻은 정보를
              회사의 사전 승낙 없이 복제, 전송, 출판, 배포, 방송, 기타 방법에
              의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안
              됩니다.
            </li>
            <li>
              ③ 이용자가 서비스 내에 게시한 일기의 저작권은 게시한 이용자에게
              귀속됩니다. 단, 회사는 서비스의 운영, 전시, 전송, 배포, 홍보의
              목적으로 이용자의 별도의 허락 없이 무상으로 ‘저작권법’에 규정하는
              공정한 관행에 합치되게 합리적인 범위 내에서 다음과 같이 이용자가
              등록한 일기을 사용할 수 있습니다.
              <ol>
                <li>
                  1. 서비스 내에서 이용자 일기의 복제, 수정, 개조, 전시, 전송,
                  배포 및 저작물성을 해치지 않는 범위 내에서의 편집 저작물 작성
                </li>
                <li>
                  2. 미디어, 통신사 등 서비스 제휴 파트너에게 이용자의 일기
                  내용을 제공, 전시 혹은 홍보하게 하는 것. 단, 이 경우 회사는
                  별도의 동의 없이 이용자의 개인정보를 제공하지 않습니다.
                </li>
                <li>
                  3. 회사는 전 항 이외의 방법으로 이용자의 일기을 이용하고자
                  하는 경우, 전화, 팩스, 이메일 등의 방법을 통해 사전에 이용자의
                  동의를 얻어야 합니다.
                </li>
              </ol>
            </li>
          </ol>
          <h3 id="제14조">제14조 (광고 게재 및 광고주와의 거래)</h3>

          <ol>
            <li>
              ① 회사가 이용자에게 서비스를 제공할 수 있는 서비스 투자기반의
              일부는 광고 게재를 통한 수익으로부터 나옵니다. 이용자는 이용자가
              등록한 일기의 내용을 활용한 광고 게재 및 기타 서비스상에 노출되는
              광고 게재에 대해 동의합니다.
            </li>
            <li>
              ② 회사는 서비스상에 게재되어 있거나 서비스를 통한 광고주의
              판촉활동에 이용자가 참여하거나 교신 또는 거래를 함으로써 발생하는
              손실과 손해에 대해 책임을 지지 않습니다.
            </li>
          </ol>

          <h3 id="제15조">제15조 (약관의 개정)</h3>
          <ol>
            <li>
              ① 회사는 ‘정보통신망 이용촉진 및 정보보호 등에 관한 법률’, ‘약관의
              규제에 관한 법률’ 등 관련 법령을 위배하지 않는 범위에서 본 약관을
              개정할 수 있습니다.
            </li>
            <li>
              ② 다만, 개정 내용이 이용자에게 불리할 경우에는 적용일자 14일
              이전부터 적용일자 전일까지 공지합니다.
            </li>
            <li>
              ③ 이용자는 변경된 약관에 대해 거부할 권리가 있습니다. 이용자는
              변경된 약관이 공지된 후 14일 이내에 거부 의사를 표명할 수
              있습니다. 이용자가 거부하는 경우 회사는 당해 이용자와의 이용계약을
              해지할 수 있습니다. 만약 이용자가 변경된 약관이 공지된 후 14일
              이내에 거부 의사를 표하지 않는 경우에는 동의하는 것으로
              간주합니다.
            </li>
          </ol>

          <h3 id="제16조">제16조 (재판관할)</h3>

          <p>
            회사와 이용자 간에 발생한 서비스 이용에 관한 분쟁에 대하여는
            대한민국 법을 적용하며, 본 분쟁으로 인한 소는 민사소송법상의 관할을
            가지는 대한민국의 법원에 제기합니다.
          </p>

          <h3 id="제17조">제17조 (개정 전 고지의무)</h3>
          <p>
            본 이용약관의 내용 추가, 삭제 및 수정이 있을 경우 개정 최소 7일 전에
            회사 서비스 내의 공지사항을 통하여 사전 공지를 할 것입니다.
          </p>

          <h3>부칙</h3>
          <p>본 약관은 2023년 9월 19일부터 시행됩니다.</p>
          <br />
        </div>
      </main>
    </>
  );
}
