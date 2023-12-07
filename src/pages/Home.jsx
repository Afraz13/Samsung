import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Photo from '../image/dress.jpg'
import { Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import './Home.css'
import Button from 'react-bootstrap/Button';



function Home(){
   
    return(
        <div>
            <div>
           
            <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:'100vh'}}
          src='https://images.moneycontrol.com/static-mcnews/2020/10/Samsung-Galaxy-S20-FE-10.jpg?impolicy=website&width=1600&height=900'
         
          alt="First slide"
        />
        <Carousel.Caption className="caption-container " style={{textAlign:"left",top:'400px',left:'120px'}}>
          <h2 style={{fontSize:'80px',color:'white'}}>Neo QLED</h2>
          <h2 style={{fontSize:'40px',color:'white'}}>More Wow than ever</h2>
          <p style={{color:'white'}}>Avail up to ₹ 16500 off with instant bank discount & app voucher</p>
          <button  className="btn btn-primary rounded-4 ms-5">Buy Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:'100vh'}}
          src='https://cdn.ytechb.com/wp-content/uploads/2021/09/samsung-wallpapers.webp'
          alt="Second slide"
        />
        <Carousel.Caption className="caption-container " style={{textAlign:"left",top:'500px',left:'120px'}}>
        <h2 style={{fontSize:'80px',color:'white'}}>Neo QLED</h2>
          <h2 style={{fontSize:'40px',color:'white'}}>More Wow than ever</h2>
          <p style={{color:'white'}}>Avail up to ₹ 16500 off with instant bank discount & app voucher</p>
          <button  className="btn btn-primary rounded-4 ms-5">Buy Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:'100vh'}}
          src='https://delhibreakings.com/wp-content/uploads/2023/05/samsung_5g_phone_1683607140.jpeg'
          alt="Third slide"
        />
        <Carousel.Caption style={{textAlign:"left",top:'400px',left:'120px'}}>
        <h2 style={{fontSize:'80px',color:'white'}}>Neo QLED</h2>
          <h2 style={{fontSize:'40px',color:'white'}}>More Wow than ever</h2>
          <p style={{color:'white'}}>Avail up to ₹ 16500 off with instant bank discount & app voucher</p>
          <button  className="btn btn-primary rounded-4 ms-5">Buy Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>


    <div>
        <h1 className="mt-5 mb-5 text-center fw-bold fs-1 text-primary" >This Week's Highlights</h1>
        <Row >
            <Col   md={6}>
            <Card className="card rounded-1 ms-2 " style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://img.global.news.samsung.com/in/wp-content/uploads/2022/03/Blue-fest-3000x2000px.jpg" />
      
        
    </Card>
            </Col>
            <Col md={6}>

            <Row >
                <Col  md={6}>
                <Card className="card rounded-1 ms-2 " style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://img.global.news.samsung.com/in/wp-content/uploads/2022/05/11861_WM_Banner_3000x2000.jpg" />
      
        
    </Card>
                </Col>
                <Col md={6}>
                  <Card className="card rounded-1 ms-2 " style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://images.news18.com/ibnkhabar/uploads/2023/05/Galaxy-M14-5G-3.jpg?im=Resize,width=450,aspect=fit,type=normal" />
      
        
    </Card></Col>
            </Row>
            <Row>
                <Col md={6}>
                <Card className="card rounded-1 ms-2 mt-3" style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://img.global.news.samsung.com/in/wp-content/uploads/2021/07/8670_BIg-TV-Day_Newsroom-Banners_3000x2000-px.jpg" />
      
        
    </Card>
                </Col>
                <Col md={6}>
                  <Card className="card rounded-1 ms-2 mt-3" style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://img.global.news.samsung.com/in/wp-content/uploads/2022/09/13305_Samsung_EBT_16-9-2022_3000X2000.jpg" />
      
        
    </Card></Col>
            </Row>
            
            
            </Col>
            </Row>
       
    </div>




<div className="image-container mt-5 mb-5">
  <img  style={{width:'100%',height:'100vh'}} src="https://cdn.zeebiz.com/sites/default/files/2023/09/19/261248-watch.jpg?im=FitAndFill=(1200,900)" alt="no image" />
 <h2 className="overlay-text  fw-bold text-center mt-3" > Mobile</h2>
 <h4 className="overlay-text1">Galaxy Watch6 |Watch6 Classic</h4>
 <p className="text1">Starting ₹21999</p>
 <p className="text2">Grab fabricbandsat 45%off</p>
 <button  className="btnn btn-primary rounded-4 ms-5">Buy Now</button>
</div>

<div className="conainer mt-5 mb-5">
<img  style={{width:'100%',height:'100vh'}} src="https://images.samsung.com/is/image/samsung/p6pim/latin/feature/164040813/latin-feature-vivid-crystal-color-on-our-slimmest-profile-532191010?$FB_TYPE_K_JPG$" alt="no image" />
<h1 className="texttv">Tv & Av</h1>
<h4 className="overlay-text2">QLED (QE1C)</h4>
 <p className="text1">Starting ₹64999</p>
 <p className="textt2">Upgrae from UHD to QLED buy paying only ₹3000 Extra </p>
 <button  className="btnn btn-primary rounded-4 ms-5">Buy Now</button>
{/* <div className="para ">
  <p>QLED   Neo QLED</p>
  <p>Neo QLED</p>
  <p>Samsung OLED</p>
  <p>Crystal 4k</p>
</div> */}
</div>


<div>
<h2 className="text-center fw-bold fs-1 mb-5">Recommened Products</h2>
<Row>
  <Col >
  <Card style={{ width: '18rem',height:'500px'  }}>
      <Card.Img variant="top" src="https://5.imimg.com/data5/SELLER/Default/2023/3/XV/XU/DP/34925622/samsung-galaxy-a04e-light-blue-128-gb-4-gb-ram-.jpg" />
      <Card.Body>
        <Card.Title className="text-center">Galaxy A04e </Card.Title>
        <Card.Text>
          <p className="text-center">₹19999.00</p>
          <p style={{fontSize:'12px'}}>MRP(inclusive of all taxes) <span style={{color:'blue'}}>Save</span>₹4500</p>
        </Card.Text>
        <Button className="btn btn-primary rounded-5 ms-5" variant="primary">Buy now</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col >
  <Card style={{ width: '18rem' ,height:'500px' }}>
      <Card.Img variant="top" src="https://media.karousell.com/media/photos/products/2023/7/9/teclast_p20hd__android_1688886394_6de46d66_progressive_thumbnail.jpg" />
      <Card.Body>
      <Card.Title className="text-center">Galaxy Tab S8 </Card.Title>
        <Card.Text>
          <p className="text-center">₹9999.00</p>
          <p style={{fontSize:'12px'}}>MRP(inclusive of all taxes) <span style={{color:'blue'}}>Save</span>₹2500</p>
        </Card.Text>
        <Button className="btn btn-primary rounded-5 ms-5" variant="primary">Buy now</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col >
  <Card style={{ width: '18rem',height:'500px' }}>
      <Card.Img variant="top" src="https://mfono.com/wp-content/uploads/2022/09/samsung_galaxy_buds2_pro_black_2_-300x300.jpg" />
      <Card.Body>
      <Card.Title className="text-center">Galaxy Buds 2 </Card.Title>
        <Card.Text>
          <p className="text-center">₹3999.00</p>
          <p style={{fontSize:'12px'}}>MRP(inclusive of all taxes) <span style={{color:'blue'}}>Save</span>₹1500</p>
        </Card.Text>
        <Button className="btn btn-primary rounded-5 ms-5" variant="primary">Buy now</Button>
      </Card.Body>
    </Card>
  </Col>

  <Col>
  <Card style={{ width: '18rem',height:'500px'  }}>
      <Card.Img variant="top" src="https://itportal.co.in/wp-content/uploads/2022/11/a1-141.jpg" />
      <Card.Body>
      <Card.Title className="text-center">Samsung Lc24F390Fhwxxl </Card.Title>
        <Card.Text>
          <p className="text-center">₹34999.00</p>
          <p style={{fontSize:'12px'}}>MRP(inclusive of all taxes) <span style={{color:'blue'}}>Save</span>₹5500</p>
        </Card.Text>
        <Button className="btn btn-primary rounded-5 ms-5" variant="primary">Buy now</Button>
      </Card.Body>
    </Card>
    
  </Col>

</Row>



    
</div>

<div>
  <p className="text-center fw-bold  ms-2 mt-5 mb-5 " style={{color:'black',fontSize:'50px'}}>Explore #DoWhatYouCant </p>

  <Row className=" mt-5">
    <Col md={1}></Col>
    <Col md={3} className='d-flex justify-content-end  me-2'>
    <img className="explore border-primary rounded-5" src="https://image-us.samsung.com/SamsungUS/support/solutions/mobile/phones/galaxy-s/s21/PH_GS_S21_Take-the-best-selfies-with-your-galaxy-phone.png" alt=""  style={{height:'400px',width:'100%'}} />
    </Col>
    <Col className="border border-primary rounded-5" md={7}>
   <p style={{fontWeight:'500', fontSize:'25px',color:'black',marginTop:'15px',marginLeft:'10px'}}>Tips for Navigating Big Life Changes</p> <br />
      <p style={{fontWeight:'500', fontSize:'25px',color:'black',marginLeft:'10px'}}>Feel To Freestyle</p> <br />
      <p style={{fontWeight:'500', fontSize:'25px',color:'black',marginLeft:'10px'}}>3Hoisting Tips To Alleviate HolidayStress</p> <br />
      <p style={{fontWeight:'500', fontSize:'25px',color:'black',marginLeft:'10px'}}>MeetG-NUSMAS, the curious extraterrestrial </p> <br />
      <p style={{fontWeight:'500', fontSize:'25px',color:'black',marginLeft:'10px'}}>Top 10 are here!</p>
    </Col>
  </Row>
</div>



        </div>
    )
}
export default Home

