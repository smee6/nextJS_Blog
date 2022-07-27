import styles from '/styles/Home.module.css'
import ProjectBox from '../../components/projectbox'

export default function Project() {
    return (
        <div className={styles.container}>
            <div className={styles.menutitle}>
                사이드 프로젝트
            </div>
            <main className={styles.main}>
                <ProjectBox type={'nextJS'}
                    title={'nextJS Blog'}
                    content={`지금 이 순간 보고있는 블로그 입니다.
                    CSS-in-JS(emotion), SSR, 정적페이지, MUI5 ,컴포넌트 등을 연습하며 개발하였습니다.
                    보일러 플레이트를 미리 만들어 두고 쌓아가는 형식으로 개발중입니다.`}
                    link={'/'}
                />
                <ProjectBox type={'GitHub Repository'}
                    title={'프론트엔드를 위한 개념과 면접 질문 프로젝트'}
                    content={`깃허브 레포지토리로 주니어 개발자 면접을 위한 프론트엔드 질문을 아카이빙 하고 있습니다.
                    꼭 챙겨야 할 개념들을 링크로 첨부하여 검색 시간 낭비를 최대한 줄일 수 있게 도와주는 프로젝트를 하고 있습니다.`}
                    link={'https://github.com/smee6/JS_FrontEnd'}
                />
                <ProjectBox type={'PHP,그누보드5'}
                    title={'서울과기대 커뮤니티 과기인'}
                    content={`서울과기대 대표 학생 커뮤니티 였던 과기인을 개발,운영,창립 했습니다.
                        그누보드5를 사용하여 각종 기능을 커스텀하여 개발하였습니다. 회원수 8000명 이상을 달성했었습니다.
                        하지만 몇년 정도 운영하고 개인사정/자금 문제로 폐쇄하게 되었습니다.폐쇄 전까지 과기대 최대 커뮤니티로 자리잡았었습니다.`}
                    link={'https://seo93.notion.site/Portfolio-3357232c9e4a4e6dbc185848cac3f3c7'}
                />
                {/* <ProjectBox type={''}
                    title={''}
                    content={``}
                    link={''}
                /> */}
            </main>
        </div>
    )
}
