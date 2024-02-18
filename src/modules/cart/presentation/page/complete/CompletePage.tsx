import React from 'react';
import styles from "../complete/complete.module.css"
import Complete_header from "./complete_header/CompleteHeader";
import CompleteInformation from "./complete_information/CompleteInformation";

function CompletePage() {
    return (
        <div className={styles.main}>
            <Complete_header/>
            <CompleteInformation/>
        </div>
    );
}

export default CompletePage;