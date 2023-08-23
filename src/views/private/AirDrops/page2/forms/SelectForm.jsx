
import React, { useState } from 'react'
import questionmark from '../../../../../assets/Images/questionmark.png'
import Radio from '@mui/material/Radio';
import './styles.scss';
import { RandomSelect } from './RandomSelect';
import { Modal, Button } from "antd";
import Deterministic from './Deterministic';
const ModalForm = ({ showModal }) => {
    const [open, setOpen] = showModal;
    const [randomModal, setRandomModal] = useState(false);
    const [determModal, setDetermModal] = useState(false);
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleAirdrop = (wichfuc) => {
        // console.log(wichfuc)
        if (wichfuc === 'a') {
            setOpen(false)
            setRandomModal(true)
        }
        else {
            setOpen(false)
            setDetermModal(true)
        }
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div className='colorHeading'>New airdrop</div>
                <div className='modalContent'>Airdrop is a quick way to send NFTs to another wallet.<br /> Select type of your airdrop<img src={questionmark} /></div>
                <div className="radios" >
                    <div> Random  <Radio
                        checked={selectedValue === 'a'}
                        onChange={handleChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                    /></div>
                    <div> Deterministic    <Radio
                        checked={selectedValue === 'b'}
                        onChange={handleChange}
                        value="b"
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'B' }}
                    /></div>
                </div>
                <div className='btns'>
                    <button className='cancelBtn simpleBtn'>Cancel</button>
                    <button className='nextBtn colorBtn' onClick={() => handleAirdrop(selectedValue)}>Next</button>
                </div>

            </div>
            <Modal
                width={"50%"}
                title={null}
                visible={randomModal}
                footer={null}
                onOk={() => setRandomModal(false)}
                onCancel={() => setRandomModal(false)}
            >
                <RandomSelect />
            </Modal>
            <Modal
                width={"50%"}
                title={null}
                visible={determModal}
                footer={null}
                onOk={() => setDetermModal(false)}
                onCancel={() => setDetermModal(false)}
            >
                <Deterministic />
            </Modal>
        </>
    )
}

export default ModalForm