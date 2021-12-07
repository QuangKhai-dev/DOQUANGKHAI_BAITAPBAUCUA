import React from 'react'
import { useDispatch } from 'react-redux'

export default function QuanCuoc(props) {
    const dispatch = useDispatch()
    const { qc } = props

    return (
        <div className="mt-3" style={{ display: 'grid', justifyItems: 'center' }}>
            <img src={qc.hinhAnh} alt="" className="rounded" />
            <div className="bg-danger mt-2 pb-3 d-flex align-items-center" style={{ borderRadius: '20px' }}>
                <button onClick={() => {
                    dispatch({
                        type: 'DAT_CUOC_BAU_CUA',
                        qc,
                        tangGiam: true
                    })
                }} style={{ fontSize: '20px' }} className="btn btn-success mt-3 mr-4 ml-4">+</button>
                <span className="text-white mt-3" style={{ fontSize: '20px' }}>{qc.diemCuoc}</span>
                <button onClick={() => {
                    dispatch({
                        type: 'DAT_CUOC_BAU_CUA',
                        qc,
                        tangGiam: false
                    })
                }} style={{ fontSize: '20px' }} className="btn btn-success mt-3 ml-4 mr-4">-</button>
            </div>
        </div >
    )
}
