import React, { useState } from 'react'
import Modal from './modals';
import deleteIcon from '../../../../assets/Images/delete.png';
import "./styles.scss";
import {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@material-ui/core";
import Table from "@mui/material/Table";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Tooltip from "@mui/material/Tooltip";
const Page2 = () => {
    const [open, setOpen] = useState(false);
    const [component, setComponent] = useState("");
    const [data, setData] = useState({});
    const handleAddNew = () => {
        setOpen(true);
        setComponent("AddUser");
    }

    return (
        <div>
            <div className='heading'>
                <div className='d-flex'>
                    <h3 className="MainHeading">Airdrops </h3>
                    <button className='addnew colorBtn' onClick={handleAddNew}>Add New</button>
                </div>
                <div className='sortSelect'>
                    Sort by   <div className="form-group">
                        <select
                            style={{
                                width: "200px",
                                height: "30px",
                                border: "1px solid #919191 ",
                                borderRadius: "5px",
                            }}
                        >
                            <option>Creation Data</option>
                            <option>Creation Data</option>
                            <option>Creation Data</option>
                            <option>Creation Data</option>
                            <option>Creation Data</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="table bg-white mt-4" style={{borderRadius:'13px'}}>
                <Table
                    sx={{ minWidth: 650, overflowX: "auto" }}
                    aria-label="simple table"
                >
                    <TableHead style={{ color: "#A1B0C3" }}>
                        <TableRow>
                            <TableCell style={{ fontWeight: "bold", fontSize: "16px", color: "#A1B0C3" }}>
                                Name
                            </TableCell>
                            <TableCell style={{ fontWeight: "bold", fontSize: "16px", color: "#A1B0C3" }}>
                                Token Address
                            </TableCell>
                            <TableCell style={{ fontWeight: "bold", fontSize: "16px", color: "#A1B0C3" }}>
                                Related Projects
                            </TableCell>
                            <TableCell style={{ fontWeight: "bold", fontSize: "16px", color: "#A1B0C3" }}>
                                Status
                            </TableCell>
                            <TableCell style={{ fontWeight: "bold", fontSize: "16px", color: "#A1B0C3" }}>
                                Type
                            </TableCell>
                            <TableCell style={{ fontWeight: "bold", fontSize: "16px", color: "#A1B0C3" }}>
                                Date
                            </TableCell>
                            <TableCell
                                style={{ fontWeight: "bold", fontSize: "16px", color: "#A1B0C3" }}
                                align="right"
                            >
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Aidrop 001</TableCell>
                            <TableCell>0xddrrj34erger235frwù2</TableCell>
                            <TableCell>Project 01</TableCell>
                            <TableCell>Compleated</TableCell>
                            <TableCell>NFT</TableCell>
                            <TableCell>12.03.22</TableCell>
                            <TableCell align="right" style={{ cursor: "pointer" }}>
                                <Tooltip title="Delete">
                                    {/* <DeleteOutline /> */}
                                    <img src={deleteIcon} alt="" />
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Aidrop 001</TableCell>
                            <TableCell>0xddrrj34erger235frwù2</TableCell>
                            <TableCell>Project 01</TableCell>
                            <TableCell>Compleated</TableCell>
                            <TableCell>NFT</TableCell>
                            <TableCell>12.03.22</TableCell>
                            <TableCell align="right" style={{ cursor: "pointer" }}>
                                <Tooltip title="Delete">
                                    {/* <DeleteOutline /> */}
                                    <img src={deleteIcon} alt="" />
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Aidrop 001</TableCell>
                            <TableCell>0xddrrj34erger235frwù2</TableCell>
                            <TableCell>Project 01</TableCell>
                            <TableCell>Compleated</TableCell>
                            <TableCell>NFT</TableCell>
                            <TableCell>12.03.22</TableCell>
                            <TableCell align="right" style={{ cursor: "pointer" }}>
                                <Tooltip title="Delete">
                                    {/* <DeleteOutline /> */}
                                    <img src={deleteIcon} alt="" />
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <Modal
                showModal={[open, setOpen]}
                data={data}
                component={component}
            />
        </div>
    )
}

export default Page2