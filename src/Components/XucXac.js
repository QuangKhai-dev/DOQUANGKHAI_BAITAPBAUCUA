import React, { Fragment } from 'react'

export default function XucXac(props) {
    const { xucXac } = props

    return (
        <Fragment >
            <div className="scene">
                <div className="cube">
                    <img className="cube__face front" src={xucXac.hinhAnh} alt="" />
                    <img className="cube__face right" src="./img/BaiTapGameBauCua/cua.png" alt="" />
                    <img className="cube__face back" src="./img/BaiTapGameBauCua/ca.png" alt="" />
                    <img className="cube__face left" src="./img/BaiTapGameBauCua/tom.png" alt="" />
                    <img className="cube__face top" src="./img/BaiTapGameBauCua/nai.png" alt="" />
                    <img className="cube__face bottom" src="./img/BaiTapGameBauCua/ga.png" alt="" />
                </div>
            </div>
        </Fragment>
    )
}
