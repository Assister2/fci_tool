function Home(props) {
  return (
    <div>
      <div className="px-[20px] 1350:flex-col lg:px-[10px] flex flex-col bg-cabinet items-center justify-center 1350:gap-[10px] gap-[10px] lg:pb-[110px]">
{/* 
        <div className="md:h-auto p-[20px] tablet:px-[30px] 1350:items-center lg:px-[20px] rounded-[20px] bg-white flex flex-col mt-[10px] w-full custom-shadow justify-center pl-[30px]">
          <span className="md:text-[22px] tablet:text-[25px] font-Freigeist text-[35px] font-semibold">
            СЭС “Кенгир” 10 МВт (Казахстан)
          </span>


        </div> */}


        <div className="_1880:pr-[30px] _1880:max-w-[100%] md:h-auto md:p-[20px] md:max-w-[100%] 1350:items-center lg:px-[20px] rounded-[20px] bg-white flex flex-col max-w-[418px] w-full h-[497px] custom-shadow justify-center pl-[30px]">
          <span className="text-[22px] font-Freigeist font-[600]">WELCOME TO FOOD CORPORATION OF INDIA</span>
          <img
            className="md:max-w-auto flex max-w-[100%]w-full mt-[10px]"
            src="assets/images/fci/home3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

// function Home(props) {

//   return (
//     <div className="page-container" style={{ backgroundColor: "#ebab44b0"}}>
//       <Sidenav />
//       <div className="page-content" style={{ backgroundImage: "url('static/img/home3.jpg')" , height:'100vh'}}>
//         <ul className="x-navigation x-navigation-horizontal x-navigation-panel" style={{ backgroundColor: "#ebab44b0"}}>
//           <li className="xn-icon-button">
//             <a href="#" className="x-navigation-minimize">
//               <span className="fa fa-dedent" />
//             </a>
//           </li>
//           <li
//             className="xn-logo"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               width: "90%",
//             }}
//           >
//             <span style={{ color: "white", fontSize: "32px" }}>HOME PAGE</span>
//             <a className="x-navigation-control"></a>
//           </li>
//         </ul>

//         <ul className="breadcrumb">
//           <li>
//             <a className="active">Home</a>
//           </li>
//         </ul>

//         <div className="page-content-wrap">
//           <div className="row">
//             <div className="col-md-12">
//               <center>
//                 <h1>
//                   <strong>WELCOME TO FOOD CORPORATION OF INDIA</strong>
//                 </h1>
//               </center>
//               <br />
//               {/* <div className="profile-image">
//                 <center>
//                   <img
//                     src="static/img/FCI home.png"
//                     className="figure-img img-fluid rounded"
//                     alt="A generic square placeholder image with rounded corners in a figure."
//                   />
//                 </center>
//               </div> */}
//               <br />
//               <br />
//               <br />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Home;
