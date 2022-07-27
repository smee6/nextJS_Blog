import styles from '/styles/Home.module.css'
import ProjectBox from '../../components/projectbox'

export default function Project() {
    return (
        <div className={styles.container}>
            <div className={styles.menutitle}>
                사이드 프로젝트
            </div>
            <main className={styles.main}>
                <ProjectBox type={'GitHub Repository'}
                    title={'프론트엔드를 위한 개념과 면접 질문 프로젝트'}
                    content={`깃허브 레포지토리로 주니어 개발자 면접을 위한 프론트엔드 질문을 아카이빙 하고 있습니다.
                     꼭 챙겨야 할 개념들을 링크로 첨부하여 검색 시간 낭비를 최대한 줄일 수 있게 도와주는 프로젝트를 하고 있습니다.`}
                    link={'https://github.com/smee6/JS_FrontEnd'}
                />
                <ProjectBox type={''}
                    title={''}
                    content={``}
                    link={''}
                />
                <ProjectBox type={''}
                    title={''}
                    content={``}
                    link={''}
                />
                <ProjectBox type={''}
                    title={''}
                    content={``}
                    link={''}
                />
            </main>
        </div>
    )
}
