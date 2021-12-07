import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function DiemCuoc(props) {
    const dispatch = useDispatch()
    const diemThuong = useSelector(state => state.BaiTapGameBauCuaReducer.tongDiem)

    return (
        <div>
            <h1 className="text-center text-danger pt-3 display-4" style={{ textShadow: '2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff' }}>Bầu Cua CyberSoft</h1>
            <div className="text-center mt-5">
                <span style={{ fontSize: '25px' }} className="p-3 bg-danger text-white">Tiền thưởng: <span className="text-warning">{diemThuong.toLocaleString()}$</span></span>
            </div>
            <div className="text-center mt-4">
                <button onClick={() => {
                    dispatch({
                        type: 'CHOI_LAI'
                    })
                }} className="btn btn-success p-3">Chơi lại</button>
            </div>
        </div>
    )
}
