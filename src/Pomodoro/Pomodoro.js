import './Pomodoro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faSun, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';
import { useEffect, useState } from 'react';

const Pomodoro = (props) => {
    const [second, setSec] = useState(0);
    const [minut, setMin] = useState(25);
    const [timer, setTimer] = useState(false);
    const [btn, setBtn] = useState(true);

    const Start = () => {
        setTimer(true);
        setBtn(false);
    }

    const Stop = () => {
        setTimer(false);
        setBtn(true);
    }

    useEffect(() => {

        if (timer == true) {
            setTimeout(() => {
                if (second >= 1 && second <= 59) setSec(second - 1);
                else if (second == 0) setSec(59);
                if (second == 0) setMin(minut - 1);
            }, 1000);
        }
    }, [second, timer, minut])

    return <div className="p-4">
        <div className="row">
            <div className="col-lg-8 col-12 bg-danger m-auto text-white rounded p-3 pb-5">
                <div className="cardd">
                    <div className="d-flex justify-content-between">
                        <div>
                            <button className="p-1 bg-danger border-0 text-white"><FontAwesomeIcon icon={faSun} className="fs-4" /></button>
                            <button className="p-1 bg-danger border-0 text-white"><FontAwesomeIcon icon={faWindowMaximize} className="fs-4" /></button>

                        </div>
                        <p>ПОМИДОР #1 (1) <button className="p-1 bg-danger border-0 text-white"><FontAwesomeIcon icon={faPlay} className="ms-2" /></button></p>
                    </div>
                    <p className="text-center clock">{minut < 10 ? "0" + minut : minut}:{second < 10 ? "0" + second : second}</p>
                    <div className="d-flex justify-content-center">
                        <Button outline color="light" className="sto me-5" onClick={Start} > Старт</Button>
                        <Button outline color="light" className="sto" onClick={Stop}>Стоп</Button>
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default Pomodoro;