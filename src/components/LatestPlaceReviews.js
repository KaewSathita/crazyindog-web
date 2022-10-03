import React from 'react'

function LatestPlaceReviews() {
  return (
    <div>
      <p className="fs-3 mt-3 mb-3">รีวิวยอดนิยม</p>
      <hr className="featurette-divider"></hr>
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1"> 5 ที่พัก @พัทยา <span className="text-muted">สุนัขเข้าได้</span></h2>
          <p className="lead">ไปพักโรงแรมพัทยา พาน้องหมาแมวไปด้วย วันหยุดพักผ่อนสุดสัปดาห์ ใครกำลังมองหาสถานที่เที่ยวใกล้ ๆ กรุงเทพฯ เราขอแนะนำพัทยา แต่ครั้งนี้ขอเอาใจฝั่งคนมีสัตว์เลี้ยงกันสักหน่อย จะเดินทางไปไหนแต่ละที ก็กังวลเรื่องที่พักเสมอ และครั้งนี้ที่พักพัทยา สามารถพาสัตว์เลี้ยงแสนรักของทุกคนไปพักผ่อนได้ด้วย ​​​​​​​Love Me Love My Dog ที่พักพัทยา พาน้องหมาไปได้! Let’s Go.</p>
          <a href="/review" className="stretched-link">อ่านต่อ...</a>
        </div>
        <div className="col-md-5 order-md-1">
          <img src="https://res.cloudinary.com/crazyindog/image/upload/v1664436076/crazyindog/Cover_acrfrn.jpg " style={{height: "300px", overflow: "hidden"}} />
          
        </div>
      </div>

      <hr className="featurette-divider"></hr>

      <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">ประโยชน์ของการฝึกสุนัข <span className="text-muted">คงไม่มีอะไรน่าปวดหัวไปกว่าสุนัขมีนิสัยเจ้าปัญหา</span></h2>
        <p className="lead">สิ่งที่ควรทำความเข้าใจก่อนคือการเริ่มต้นฝึกสุนัขนั้นจำเป็นต้องมีความใจเย็นและอดทนเป็นอย่างมาก โดยเฉพาะเจ้าของที่เพิ่งเคยเลี้ยงสุนัขเป็นครั้งแรก อย่าเพิ่งโมโหถ้าสุนัขไม่ยอมทำตามคำสั่งหรือไม่เชื่อฟัง เพราะสุนัขเองจำเป็นที่จะค่อยๆ เรียนรู้ บางครั้งอาจจะต้องค่อยๆ ศึกษานิสัยใจคอของเขาว่าเป็นอย่างไร เพราะการแสดงออกของสุนัขแต่ละตัว รวมไปถึงนิสัยก็แตกต่างกันออกไปเช่นกัน</p>
        <a href="/review" className="stretched-link">อ่านต่อ...</a>
      </div>
      <div className="col-md-5">
      <img src="https://res.cloudinary.com/crazyindog/image/upload/v1664764547/crazyindog/pamDogwalker_apoioj.jpg" style={{height: "300px", overflow: "hidden"}} />

      </div>
    </div>

      <hr className="featurette-divider"></hr>


    </div>

  )
}

export default LatestPlaceReviews