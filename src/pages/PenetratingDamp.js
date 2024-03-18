import React from "react";
import styles from "../styles/PageContent.module.css";
import risingDamp1 from "../assets/rising-damp-3.jpg";
import risingDamp2 from "../assets/rising-damp-1.jpg";
import risingDamp3 from "../assets/rising-damp-2.jpg";
import risingDamp4 from "../assets/trigel_001.jpg";
import { Link } from "react-router-dom";

const PenetratingDamp = () => {
  return (
    <div className={styles.container}>
      <h1>Penetrating Damp</h1>
      <p>
        <strong>Penetrating Damp</strong> - The outer walls of a property can
        become damaged for a variety of reasons from bad construction methods to
        simple wear and tear. Moisture from outside the house penetrates cracks
        in the mortar and travels to the inner walls of the property. Defective
        rainwater goods (gutters and downpipes) can provide a steady supply of
        water to defective areas allowing the penetration of damp through walls,
        resulting in internally damp walls. The areas around windows and
        windowsills commonly suffer from penetrating damp problems.
      </p>
      <div className="d-flex">
        <img
          src={risingDamp1}
          alt="Rising Damp"
          className={styles.smallerImage}
        />
      </div>
      <hr />
      <h2>Penetrating Damp Treatment</h2>
      <p>
        Protum Services offer a solution to the problems of penetrating damp.
        The phrase “prevention is better than cure” is very apt for this
        problem. Penetrating damp problems can develop over a number of years
        and if spotted early can be prevented from developing any further.
      </p>
      <p>Check for:</p>
      <ul>
        <li>Leaks in gutters, downpipes, shores and valleys.</li>
        <li>Broken or misplaced slates or tiles from the roof.</li>
        <li>
          Blocked ventilators, internal vents should not be blocked or papered
          over. External vents should be kept free of vegetation.
        </li>
        <li>
          Soil, flower beds etc. which are above the level of vents and D.P.C.
          (Damp Proof Course) can trap stagnant air and allow moisture to enter
          your house causing rising damp and timber decay.
        </li>
        <li>Defective external surface coatings (e.g. paint etc.)</li>
        <li>Cracks in exterior renders.</li>
      </ul>
      <p>
        If you notice any of the above issues in your property,{" "}
        <Link to="/contact"> contact </Link> Protum Services and we will carry
        out a penetrating damp survey on your house to avoid any problems in the
        future and we can provide preventative measures if required.
      </p>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <img
          src={risingDamp2}
          alt="Rising Damp"
          className={`${styles.smallerImage} img-fluid`}
        />
        <img
          src={risingDamp3}
          alt="Rising Damp"
          className={`${styles.smallerImage} img-fluid`}
        />
        <img
          src={risingDamp4}
          alt="Rising Damp"
          className={`${styles.smallerImage} img-fluid`}
        />
      </div>
    </div>
  );
};

export default PenetratingDamp;
