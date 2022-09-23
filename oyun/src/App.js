import { Container, } from "reactstrap";
import Model from "./Model";
import { Row, Col } from "reactstrap";
import Baslik from "./Baslik";
import "./App.css";
import User1 from "./User1";
import User2 from "./User2";
import { useEffect, useState } from "react";
function App() {
  const [yazilar, setYazilar] = useState("But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure");
  const [message,setMessage]=useState("")
  const [kelime,setKelime]=useState("kalem")
  const [parcalanmisyazi,setParcalanmisYazi]=useState(yazilar.split(" "))
 const [indextutucu,setIndextutucu]=useState(0)
 const [modalvisible,setModalVisible]=useState(false)
  
 //position x 136 ilk araba
 const toggle=()=>{
  setModalVisible(!modalvisible)
  setIndextutucu(0)
  setKelime("kalem")

 }

  return (
    <div>
      <Container>
        <Baslik></Baslik>
        <Row>
          <Col xs="12">
            <User1 message={message} toggle={toggle} setIndextutucu={setIndextutucu} indextutucu={indextutucu} parcalanmisyazi={parcalanmisyazi} setKelime={setKelime} kelime={kelime} setMessage={setMessage}></User1>
          </Col>
        </Row>
        <Model toggle={toggle} modalvisible={modalvisible} ></Model>
      </Container>
    </div>
  );
}

export default App;
