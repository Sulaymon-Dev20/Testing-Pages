import * as React from "react";
import "./assets/css/style.css";
import bus from "./assets/img/bus.svg";
import clock from "./assets/img/clock.svg";
import turnRight from "./assets/img/turn-right.svg";
import {Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row, Input, Label} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {getTimeBusByStationId, searchStation} from "./redux/apiMobileV2/ApiMobileV2Action";

function App() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.apiMobileV2Reducer.timeBusData);
    const station = useSelector(state => state.apiMobileV2Reducer.timeBusStationInfo);

    const stationsData = useSelector(state => state.apiMobileV2Reducer.stationData);

    let time = new Date().toLocaleTimeString();
    const [time2, setTime2] = React.useState(time);
    const [modal, setModal] = React.useState(false);
    const [search, setSearch] = React.useState('');
    const [id, setId] = React.useState(5462);
    React.useEffect(() => {
        dispatch(getTimeBusByStationId(id));
        dispatch(searchStation());
    }, []);

    const month = new Date().getMonth() + 1;
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setTime2(time)
    }

    setInterval(UpdateTime, 1000);

    const updateStation = (i) => {
        setId(i);
        setModal(false);
        dispatch(getTimeBusByStationId(i));
    };

    return (
        <>
            <Container className="App">
                <Row className="mybus__top">
                    <h1>My<span>Bus</span></h1>
                    <p>{new Date().getDate()}.{month.length !== 2 ? "0" + month : month}.{new Date().getFullYear()} {" "}{time2}</p>
                </Row>
                <Row className="mybus__main">
                    <Col md={12}>
                        <Row className="mybus__dropdown"><p
                            onClick={() => setModal(true)}>{station ? station.name : ''}</p>
                            <div className="hide__block">
                                <p><input type="text"/></p>
                                <p>Saodat Savdo markazi bekati</p>
                                <p>Saodat Savdo markazi bekati2</p>
                                <p>Saodat Savdo markazi bekati3</p>
                                <p>Saodat Savdo markazi bekati4</p>
                                <p>Saodat Savdo markazi bekati5</p>
                            </div>
                        </Row>
                        <table>
                            <thead>
                            <tr className="mybus__inner">
                                <td>
                                    <img src={bus} alt="bus"/>
                                    <p>Aftobus</p>
                                </td>
                                <td>
                                    <img src={turnRight} alt="turn-right"/>
                                    <p>Yo`nalish</p>
                                </td>
                                <td>
                                    <img src={clock} alt="clock"/>
                                    <p>Vaqti</p>
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            {data && data.length > 0 ? data.map((item, index) =>
                                <tr className="mybus__inner" key={index++}>
                                    <td><p>{item.routeName}</p></td>
                                    <td><p>{item.routeKpp2}</p></td>
                                    <td><p>{item.time}</p></td>
                                </tr>
                            ) : ''}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
            <Modal isOpen={modal}>
                <ModalHeader>Search station</ModalHeader>
                <ModalBody>
                    <Label check>
                        <Input type="text" onChange={e => {
                            setSearch(e.target.value)
                        }}/>{' '}
                    </Label>
                    {stationsData && stationsData.length > 0 ? stationsData.filter((item) => {
                        if (search === "") {
                            return item;
                        } else if (item.name.toLowerCase().includes(search.toLowerCase()) || item.nameLt.toLowerCase().includes(search.toLowerCase())) {
                            return item;
                        }
                    }).map((item, index) =>
                        <Col lg="3" sm="6" key={index++}>
                            <p onClick={() => updateStation(item.id)}>{item.name}</p>
                        </Col>
                    ) : ''}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary">Do Something</Button>{' '}
                    <Button color="secondary">Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default App;