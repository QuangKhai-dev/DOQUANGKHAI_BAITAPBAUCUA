import React from 'react'
import XucXac from './XucXac';
import { useSelector, useDispatch } from 'react-redux';

export default function DanhSachXucXac() {
    const dispatch = useDispatch()

    const mangXucXac = useSelector(state => state.BaiTapGameBauCuaReducer.mangXucXac)


    return (
        <div className="mt-5 ">
            <div className="bg-white" style={{ width: 400, height: 400, borderRadius: '50%' }}>
                <div className="row ">
                    <div className="col-12 text-right " style={{ marginLeft: '100px' }}>
                        <XucXac xucXac={mangXucXac[0]} />
                    </div>
                    <div className="col-6 text-right">
                        <XucXac xucXac={mangXucXac[1]} />
                    </div>
                    <div className="col-6 text-right">
                        <XucXac xucXac={mangXucXac[2]} />
                    </div>
                </div>
            </div>
            <div className="mt-5" style={{ marginLeft: '35%' }}>
                <button onClick={() => {
                    dispatch({
                        type: 'PLAY_GAME_BAU_CUA',

                    })
                }} className="btn btn-success p-2" style={{ fontSize: '25px' }}>
                    Xốc
                </button>
            </div>
        </div>
    )
}
