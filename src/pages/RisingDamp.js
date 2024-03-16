import React from "react";
import styles from "../styles/PageContent.module.css";
import risingDamp from "../assets/rising-damp-professional-protum-services.jpg";
import injection from "../assets/rising damp chemical injection.jpg";
import lectros from "../assets/lectros.gif";

const RisingDamp = () => {
  return (
    <div className={styles.container}>
      <h1>Rising Damp</h1>
      <p>
        Do you have damp walls in your house? One of the main causes of dampness
        is rising damp. When porous brickwork comes in contact with surface
        moisture, the brickwork acts as a sponge and soaks up the moisture
        through capillary action.
      </p>
      <div className="d-flex">
      <img src={risingDamp} alt="Rising Damp" className={styles.image} />
      </div>
      <p>
        A rising damp problem should not be confused with condensation.
        Condensation is the process by which moist air, in rooms with poor
        ventilation, cools and condenses into water. The presence of black mould
        is the main indicator of condensation.
      </p>
      <h2>How to treat Rising Damp</h2>
      <p>
        The source of a rising damp problem is determined through the analysis of
        data provided by an electronic moisture meter (moisture monitor), backed
        up in some cases by laboratory tests.
      </p>
      <p>
        Protum Services will provide you with a full report detailing the extent
        of the rising damp problem, the best course of action and full price
        breakdown.
      </p>
      <p>
        In cases where laboratory tests are needed, Protum uses top class
        laboratory facilities to assist in diagnosing the problem. A persistent
        rising damp problem takes chlorides, nitrates and other salts from the
        soil and deposits them on the face of the plaster as the water evaporates
        from the surface. This causes persistently damp walls even after the
        rising damp problem has been treated. Protum Services recommend removing
        all defective damp plaster that has been contaminated by the salts and
        replacing it strictly in accordance with our damp proofing specification.
        This is made up of three coat work incorporating specialised plaster and
        renders, special damp proofing agents and salt free sand.
      </p>
      <p>
        If you have damp walls in your house or notice the presence of dampness
        or black mould, contact Protum Services for immediate assistance.
      </p>
      <h2>Rising Damp Treatment</h2>
      <p>
        <strong>Chemical Injection:</strong> The injection of specialised
        chemicals into brick, block and stone walls to prevent moisture from
        entering a premises. Depending on the particular problem, there are
        different chemical compounds and methods used when treating rising damp.
      </p>
      <div className="d-flex">
      <img src={injection} alt="Rising Damp" className={styles.smallerImage} />
      </div>
      <p>
        <strong>Lectros:</strong> Or Electro Osmotic Damp Proofing is a
        chemical-free damp proofing system that utilises the principle of
        Electro-Osmosis. Electro-Osmosis occurs when an electrical potential is
        applied across a damp material, this causes a force to be exerted on the
        water which then moves it towards the earth.
      </p>
      <div className="d-flex">
      <img src={lectros} alt="Rising Damp" className={styles.smallerImage} />
      </div>
    </div>
  );
};

export default RisingDamp;
