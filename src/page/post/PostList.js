import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../../component/table/CommonTable';
import CommonTableColumn from '../../component/table/CommonTableColumn';
import CommonTableRow from '../../component/table/CommonTableRow';
import { postList } from '../../Data';

function PostList(props) {
    const [dataList, setDataList] = useState([]);

    // 최초로 Render 되었을때 setDataList 함수를 이용해 dataList의 값을 초기화 해주기!
    useEffect(() => {
        setDataList(postList);
    }, []);

    return (
        <>
            <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
                {dataList ? dataList.map((item, index) => {
                    return (
                        <CommonTableRow key={index}>
                            <CommonTableColumn> {item.no} </CommonTableColumn>
                            <CommonTableColumn>
                                <Link to={`/postView/${item.no}`}>{item.title}</Link>
                            </CommonTableColumn>
                            <CommonTableColumn> {item.createDate} </CommonTableColumn>
                            <CommonTableColumn> {item.readCount} </CommonTableColumn>
                        </CommonTableRow>
                    )
                }) : ''
                }
            </CommonTable>
        </>
    );
}

export default PostList;