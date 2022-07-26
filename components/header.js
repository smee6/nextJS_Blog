import Button from '@mui/material/Button';
import styles from '/styles/Home.module.css'
import Link from 'next/link';
import url from '../utility/url';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ButtonGroup from '@mui/material/ButtonGroup';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


export default function Header() {
    const theme = createTheme({
        palette: {
            primary: {
                main: grey[900],
            },
        },
    });


    return (
        <>
            <title>서명인 개발 블로그</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <div className={styles.hideMenu}>
                <ThemeProvider theme={theme}>
                    {url.map((e) => (
                        <Link href={e.link} key={e.title}>
                            <Button size="large">{e.title}</Button>
                        </Link>
                    ))}
                </ThemeProvider>
            </div>
            <div className={styles.showMenu}>
                <a>
                    <Accordion TransitionProps={{ unmountOnExit: true }} >
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <FontAwesomeIcon icon={faBars} size="2x" />
                        </AccordionSummary>
                        <AccordionDetails>
                            <ThemeProvider theme={theme}>
                                <ButtonGroup
                                    orientation="vertical"
                                    aria-label="vertical contained button group"
                                    variant="text"
                                    fullWidth={true}
                                >
                                    {url.map((e) => (
                                        <Link href={e.link} key={e.title}>
                                            <Button size="large">{e.title}</Button>
                                        </Link>
                                    ))}
                                </ButtonGroup>
                            </ThemeProvider>
                        </AccordionDetails>
                    </Accordion>
                </a>
            </div>
        </>
    );
}

