import { Tab, Tabs } from "react-bootstrap";
import TableList from "../components/TableList";
import { dataTable } from "../data";

const History = () => {
    const columns = [
        {
          title: 'Merchant',
          dataIndex: 'merchant',
          sorter: (a, b) => a.merchant.length - b.merchant.length,
          sortDirections: ['descend'],
          render: ( merchant, record) => (
            <>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center'}}>
                    <img src={record.merchant_logo} alt="merchant logo" style={{ width: '36px', marginRight: '8px'}} />
                    <span>{merchant}</span>
                </div>
            </>
        ),
        },{
          title: 'Date',
          dataIndex: 'date',
        },{
          title: 'Time',
          dataIndex: 'time'
        },{
            title: 'Earned Points',
            dataIndex: 'point',
            render: (point) => (
                <>
                    <div style={{ backgroundColor: "var(--table-point-bg-color)", padding: "8px 16px", borderRadius: "16px", display: "inline", color: "var(--table-point-text-color)"}}>
                        +{point} Point
                    </div>
                </>
            ),
        },{
            title: '',
            dataIndex: '',
            render: () => (
                <>
                    <a href="#" style={{ color: 'unset'}}><i className="bi bi-three-dots-vertical"></i></a>
                </>
            ),
        }
    ];

    return(<>
        <div className="history">
            <div className="container">
                <div className="history-header">
                    <p className="title">Point History</p>
                    <p className="text-muted t-1">View your earned and reedemed point</p>
                </div>
                <div className="history-content">
                    <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                        >
                        <Tab eventKey="home" title="Earned">
                            <TableList columns={columns} dataTable={dataTable} />
                        </Tab>
                        <Tab eventKey="profile" title="Redeemed">
                            <TableList />
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    </>)
}

export default History