import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectBox({ title, content, link, type }) {
    return (
        <>
            <Card variant="outlined" sx={{ minWidth: 275, width: '100%' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                        {type}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {content}
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium" href={link}>프로젝트 페이지 링크</Button>
                </CardActions>
            </Card>
            <br />
        </>
    );
}

