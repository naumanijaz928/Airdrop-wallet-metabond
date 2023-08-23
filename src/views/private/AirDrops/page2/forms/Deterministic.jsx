import React from 'react'
import "./Deterministic.scss";
import { Upload, message, Popover, Avatar } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import questionmark from '../../../../../assets/Images/questionmark.png'
import uploadcloud from '../../../../../assets/Images/uploadcloud.png'
import { Input } from 'antd';
import {
    Box,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import Table from "@mui/material/Table";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Tooltip from "@mui/material/Tooltip";

const Deterministic = () => {
    const { Dragger } = Upload;
    const props = {
        name: "file",
        multiple: true,
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        onChange(info) {
            const { status } = info.file;
            if (status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (status === "done") {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log("Dropped files", e.dataTransfer.files);
        },
    };
    return (
        <>
            <div className='colorHeading'>New determenistic airdrop</div>
            <div className='modalContent'>Airdrop is a quick way to send NFTs to another wallet.<br /> NFTs will be sent in chronological order.</div>
            <p className="fieldHeading">Enter Token ID</p>
            <div style={{ display: "flex" }}>
                <Input placeholder="0x438548568493onefrij4r84cjnc"  style={{ padding: 15 }}/>
            </div>
            <p className="fieldHeading">Enter new wallet adress or EMS name</p>
            <div style={{ display: "flex" }}>
                <Input placeholder="0000001"  />
                <button className='addBtn colorBtn'>Add</button>
            </div>

            <div className="py-2">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p className="fieldHeading">or upload CVS file below </p>
                    <Popover placement="bottomLeft" title={'How to create a CSV file'} content={'CSV is a simple file format '}>
                        <div style={{ marginLeft: '5px' }}> <img src={questionmark} alt="" /></div>
                    </Popover>
                </div>

                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <img src={uploadcloud} />
                    </p>
                    <p className="ant-upload-text text-muted">
                        Drag and drop, or browse your files
                    </p>

                </Dragger>
            </div>
            <div className="py-2">
                <TableContainer
                    style={{
                        minWidth: "auto",
                        height: "auto",
                        background: "#FAFAFA",
                    }}
                >
                    <Table
                        sx={{ minWidth: "auto" }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    style={{ fontWeight: "bolder", fontSize: "14px" }}
                                >
                                    Name
                                </TableCell>
                                <TableCell
                                    style={{ fontWeight: "bolder", fontSize: "14px" }}
                                >
                                    Token ID
                                </TableCell>
                                <TableCell
                                    align='right'
                                    style={{ fontWeight: "bolder", fontSize: "14px" }}
                                >
                                    Date
                                </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>0000001</TableCell>
                                <TableCell>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</TableCell>
                                <TableCell>24.02.22</TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className='btns'>
                <button className='BackBtn simpleBtn'>Back</button>
                <button className='nextBtn colorBtn'>Next</button>
            </div>
        </>
    )
}

export default Deterministic