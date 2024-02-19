/* eslint-disable react/prop-types */
import { Form, InputGroup } from "react-bootstrap"
import { Table } from 'antd';

const TableList = ({ columns, dataTable }) => {
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const paginationOptions = {
        pageSize: 5,
        itemRender: (current, type, originalElement) => {
            if (type === 'prev') {
              return <a style={{ marginRight: '32px', border: "1px solid var(--table-border-color)", borderRadius: "8px", padding: '8px'}}>
                        <i className="bi bi-arrow-left"></i><span> Prev</span>
                    </a> ;
            }
            if (type === 'next') {
              return <a style={{ marginLeft: '32px', border: "1px solid var(--table-border-color)", borderRadius: "8px", padding: '8px'}}>
                        <span>Next </span><i className="bi bi-arrow-right"></i>
                    </a> ;
            }
            return originalElement;
          },
    };

    return(<>
        <div className="tablelist ">
            <div className="table-header">
                <div className="row m-0">
                    <div className="col-5 p-0">
                        <p className="title">Company List Lorem Ipsum</p>
                        <p className="desc">These companies consecture ipsum</p>
                    </div>
                    <div className="col-7 p-0">
                        <div className="search-section">
                            <InputGroup className="mb-3">
                                <Form.Select aria-label="Default select example">
                                    <option>All</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <InputGroup.Text id="basic-addon1"><i className="bi bi-search"></i></InputGroup.Text>
                                <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <button className="btn btn-light">Cari</button>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="table-content">
                <Table columns={columns} dataSource={dataTable} onChange={onChange} pagination={paginationOptions} />
            </div>
        </div>
    </>)
}

export default TableList