import React,{useEffect,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Eimg from '../images/etour.png';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';
import Data from '../Data';
import EachActivity from './EachActivity';
import { useDrop } from "react-dnd";
import CloseButton from 'react-bootstrap/CloseButton';

import { memo } from "react";
import { useCallback } from 'react';




function Activities() {
    const [board, setBoard] =useState([]);
    // const [dayone,setDayone]=useState(true);
const [dayTwodata,setDayTwoData] =useState([]);
const [daythreedata,setDaythreeData] =useState([]);
const [dayfourdata,setDayfourData] =useState([]);
const [onemorethanNine,setoneMoreThanNine]=useState(false);
const [twomorethanNine,setTwoMoreThanNine]=useState(false);
const [threemorethanNine,setthreeMoreThanNine]=useState(false);
const [fourmorethanNine,setfourMoreThanNine]=useState(false);
const [allsave,setAllsave]=useState([])
const [savediternary,setSavedIternary]=useState([])

const [isInitialRender, setIsInitialRender] = useState(true);
const [rideeffect,setRideEffect]=useState(false)



    const [day,setDay]=useState({
        day1:true,
        day2:false,
        day3:false,
        day4:false
    })
   
     
     
   
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => addImageToBoard(item.id,day),
      //   drop1: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }),[day]);
    
   
    
    
        const addImageToBoard = (id,day) => {
           setRideEffect(true)
            if(day.day1){
                const pictureList = Data.filter((picture) => id === picture.id);
                
                setBoard((board) => [...board, pictureList[0]]);
                setoneMoreThanNine(false)
       };
    
       if(day.day2){
        const pictureListdat2 = Data.filter((picture) => id === picture.id);
        
        setDayTwoData((board) => [...board, pictureListdat2[0]]);
        setTwoMoreThanNine(false)
    };

    if(day.day3){
        const pictureListday3 = Data.filter((picture) => id === picture.id);
        
        setDaythreeData((board) => [...board, pictureListday3[0]]);
        setthreeMoreThanNine(false);
    };

    if(day.day4){
        const pictureListday4 = Data.filter((picture) => id === picture.id);
        
        setDayfourData((board) => [...board, pictureListday4[0]]);
        setfourMoreThanNine(true)
    };
    

            }
    
        
    

        const handledayone=()=>{
            setDay({
                day1:true,
                day2:false,
                day3:false,
                day4:false
            })
            setTwoMoreThanNine(false);
            setthreeMoreThanNine(false);
            setfourMoreThanNine(false);
        }
        
    const handledaytwo=()=>{
        setDay({
            day1:false,
            day2:true,
            day3:false,
            day4:false
        }) 
         setoneMoreThanNine(false);
         setthreeMoreThanNine(false);
            setfourMoreThanNine(false);
    }

    const handledaythree=()=>{
        setDay({
            day1:false,
            day2:false,
            day3:true,
            day4:false
        }) 
        setoneMoreThanNine(false)
        setTwoMoreThanNine(false)
        setfourMoreThanNine(false);
    }

    const handledayfour=()=>{
        setDay({
            day1:false,
            day2:false,
            day3:false,
            day4:true
        }) 
        setoneMoreThanNine(false)
        setTwoMoreThanNine(false)
        setthreeMoreThanNine(false);
    
    }

const handleday1delete=(id)=>{
        
            const value=board.filter((data)=>id!==data.id);
            
           setBoard(value)
           setoneMoreThanNine(false)
        
}

const handleday2delete=(id)=>{
        
    const value=dayTwodata.filter((data)=>id!==data.id);
   
   setDayTwoData(value)

}

const handleday3delete=(id)=>{
        
    const value=daythreedata.filter((data)=>id!==data.id);
    
   setDaythreeData(value)

}
const handleday4delete=(id)=>{
        
    const value=dayfourdata.filter((data)=>id!==data.id);
   setDayfourData(value)

}

useEffect(()=>{

        const dataone= board.filter( (ele, ind) => ind === board.findIndex( elem => elem.id === ele.id))
        const total = board.reduce(
            (prevValue, currentValue) => prevValue + currentValue.timetaken,
            0
          );
    
        if(total<=9){
         setBoard(dataone);
        }else{
           setoneMoreThanNine(true)
        }
       
        setRideEffect(false)
  
  
  },[board])  


 useEffect(()=>{
    const dataone= dayTwodata.filter( (ele, ind) => ind === dayTwodata.findIndex( elem => elem.id === ele.id))

  const total = dayTwodata.reduce(
    (prevValue, currentValue) => prevValue + currentValue.timetaken,
    0
  );

if(total<=9){
    setDayTwoData(dataone);
}else{
    setTwoMoreThanNine(true)
}
setRideEffect(false)
  
  },[dayTwodata]) 
  



  
 useEffect(()=>{
    const dataone= daythreedata.filter( (ele, ind) => ind === daythreedata.findIndex( elem => elem.id === ele.id))
    const total = daythreedata.reduce(
        (prevValue, currentValue) => prevValue + currentValue.timetaken,
        0
      );
      if(total<=9){
        setDaythreeData(dataone);
    }else{
        setthreeMoreThanNine(true)
    }
     
    setRideEffect(false)
  },[daythreedata]) 

const dataFour=()=>{
    const dataone=dayfourdata.filter( (ele, ind) => ind === dayfourdata.findIndex( elem => elem.id === ele.id));
    // setDayfourData(dataone)
      const total = dayfourdata.reduce(
        (prevValue, currentValue) => prevValue + currentValue.timetaken,
        0
      );
    //   console.log(total,"data2")
    if(total<=9){
        setDayfourData(dataone);
    }else{
        setfourMoreThanNine(true)
    }
    setRideEffect(false)
}
  

// const value=useCallback(()=>{
    
//     const dataone=dayfourdata.filter( (ele, ind) => ind === dayfourdata.findIndex( elem => elem.id === ele.id));
//     // setDayfourData(dataone)
// },[])


 useEffect(()=>{
    dataFour()
  },[dayfourdata]) 
 

  const saveItineray=()=>{
    const value=[];
   setAllsave([...board,...dayTwodata,...daythreedata,...dayfourdata]);
   setBoard([]);
   setDayTwoData([]);
   setDaythreeData([]);
   setDayfourData([]);

  }

  useEffect(()=>{
setSavedIternary([...savediternary,allsave])
  },[allsave])

 
  
  
        
      return (
    <div>
        <Container>
        <Row>
                <Col xs="9">
                    <Row>
                
                
                {Data.map((value)=>{
                    
            return  ( 
            <Col xs="4">
   <EachActivity id={value.id} activity={value.activity} TimeDuration={value.timetaken}/>
</Col>
)
 })}

 </Row>
 </Col>
 
 <Col xs="3">
    {day.day1?<Col>
 <div className="Board Board_onedata" ref={drop}>
        {board.map((picture) => {
          return <Card>
            <Container>
                <Row>
                    <Col xs={8}>
            <p>{picture.activity}</p>
           
            </Col>
            <Col xs={2}>
            <p>{picture.timetaken}</p>
            </Col>
            <Col xs={2}>
            <CloseButton onClick={()=>{handleday1delete(picture.id)}}/>
            </Col>
            
            </Row>
           
            </Container>
          </Card>
        })}
         <div className="sub_div">
            {onemorethanNine?<p>plan should not exceed nine hours</p>:""}
        </div>
      </div>
      </Col>:""
}
{day.day2?<Col>
 <div className="Board Board_twodata" ref={drop}>
        {dayTwodata.map((picture) => {
          return <Card>
          <Container>
              <Row>
                  <Col xs={8}>
          <p>{picture.activity}</p>
         
          </Col>
          <Col xs={2}>
          <p>{picture.timetaken}</p>
          </Col>
          <Col xs={2}>
          <CloseButton onClick={()=>{handleday2delete(picture.id)}}/>
          </Col>
          </Row>
          </Container>
        </Card>
        })}
         <div className="sub_div1">
            {twomorethanNine?<p>plan should not exceed nine hours</p>:""}
        </div>
      </div>
      </Col>:""
}
{day.day3?<Col>
 <div className="Board Board_Three" ref={drop}>
        {daythreedata.map((picture) => {
          return <Card>
          <Container>
              <Row>
                  <Col xs={8}>
          <p>{picture.activity}</p>
         
          </Col>
          <Col xs={2}>
          <p>{picture.timetaken}</p>
          </Col>
          <Col xs={2}>
          <CloseButton onClick={()=>{handleday3delete(picture.id)}}/>
          </Col>
          </Row>
          </Container>
        </Card>
        })}
        <div className="sub_div3">
            {threemorethanNine?<p>plan should not exceed nine hours</p>:""}
        </div>
      </div>
      </Col>:""
}
{day.day4?<Col>
 <div className="Board Board_four" ref={drop}>
        {dayfourdata.map((picture) => {
          return <Card>
          <Container>
              <Row>
                  <Col xs={8}>
          <p>{picture.activity}</p>
         
          </Col>
          <Col xs={2}>
          <p>{picture.timetaken}</p>
          </Col>
          <Col xs={2}>
          <CloseButton onClick={()=>{handleday4delete(picture.id)}}/>
          </Col>
          </Row>
          </Container>
        </Card>
        })}
        <div className="sub_div4">
            {threemorethanNine?<p>plan should not exceed nine hours</p>:""}
        </div>
      </div>
      </Col>:""
}
    

     
     <Col >
     <div style={{marginBottom:"5%"}}>
     <Row>
       
     <Col xs={3}>
        <Button onClick={()=>{handledayone()}} class="btn btn-secondary">Day1</Button>
        </Col>
        <Col xs={3}>
        <Button onClick={()=>{handledaytwo()}} class="btn btn-secondary">Day2</Button>
        </Col>
        <Col xs={3}>
        <Button onClick={()=>{handledaythree()}} class="btn btn-secondary">Day3</Button>
        </Col>
        <Col xs={3}>
        <Button onClick={()=>{handledayfour()}} class="btn btn-secondary">Day4</Button>
        </Col>
        
        </Row>
        </div>
     </Col>
     <Col xs={12}>
        <Button style={{width:"300px"}} class="btn btn-light" onClick={saveItineray}>Save itinerary</Button>
        </Col>
    </Col>
   
   
   
 </Row>
 <Row>
 <div>
    <h3>saved Iternary</h3>
    
            
           
        {savediternary.length>0?
        savediternary.map((data,index)=>{
          return <div key={data.id}>
           {data.length>0?<h6 style={{color:"blue"}}>saved iternary:{index}</h6>:""}
   
          <Card>
            <Row>
                      
          <Col xs={6}>
            {data.map((value)=>{
                
             return <div>
                <Container>
                <Row>
                    <Col>
             <p>{value.activity}</p>
             </Col>
             <Col>
             <p>{value.timetaken}</p>
             </Col>
             </Row>
             </Container>
             
               </div> 
   
            
           })}

           </Col>
    
           </Row>
           </Card>
           
          </div>
          
        }):""}
 
           
          
   </div>
   </Row>
    </Container>
    </div>
  )
}

export default Activities