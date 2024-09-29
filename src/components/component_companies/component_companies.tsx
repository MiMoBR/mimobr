import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import style from './style.module.css';
import Image from 'next/image'
import ToyotaLogo from '../../assets/pictures/webp/toyota.webp'
import BovControlLogo from '../../assets/pictures/webp/bovcontrol.webp'
import CreditasLogo from '../../assets/pictures/webp/creditas.webp'
import KoroLogo from '../../assets/pictures/webp/koro_creators.webp'

export default function ComponentCompanies() {

    return (
        <>
            <Row>
                <Col className={style.compoent_companies}>
                    <Image src={ToyotaLogo} alt="Mountains" className={style.picture_custom} />
                    <Image src={BovControlLogo} alt="Mountains" className={style.picture_custom} />
                    <Image src={CreditasLogo} alt="Mountains" className={style.picture_custom} />
                    <Image src={KoroLogo} alt="Mountains" className={style.picture_custom} />
                </Col>
            </Row>
        </>
    );
}
