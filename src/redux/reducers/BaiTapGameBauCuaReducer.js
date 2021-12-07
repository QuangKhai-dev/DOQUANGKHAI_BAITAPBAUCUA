const stateDefault = {
    danhSachCuoc: [
        { ma: 'bau', hinhAnh: './img/BaiTapGameBauCua/bau.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/BaiTapGameBauCua/ca.png', diemCuoc: 0 },
        { ma: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './img/BaiTapGameBauCua/cua.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './img/BaiTapGameBauCua/nai.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './img/BaiTapGameBauCua/tom.png', diemCuoc: 0 },
    ],
    tongDiem: 1000,
    mangXucXac: [
        { ma: 'bau', hinhAnh: './img/BaiTapGameBauCua/bau.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/BaiTapGameBauCua/ca.png', diemCuoc: 0 },
        { ma: 'ga', hinhAnh: './img/BaiTapGameBauCua/ga.png', diemCuoc: 0 },
    ]
}

export default (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC_BAU_CUA': {
            const mangCuocUpdate = [...state.danhSachCuoc]
            const index = mangCuocUpdate.findIndex(qc => qc.ma === action.qc.ma)
            if (index !== -1) {
                if (action.tangGiam) {
                    if (state.tongDiem > 0) {
                        mangCuocUpdate[index].diemCuoc += 100;
                        state.tongDiem -= 100
                        //Chỉnh sửa thêm else khi tổng điểm = 0 thì không trừ đi 100
                    } else {
                        alert('Hết điểm')
                        mangCuocUpdate[index].diemCuoc += 0;
                        state.tongDiem -= 0
                    }
                }
                else {
                    if (mangCuocUpdate[index].diemCuoc > 0) {
                        mangCuocUpdate[index].diemCuoc -= 100;
                        state.tongDiem += 100
                    }
                }
            }
            console.log(action)
            state.danhSachCuoc = mangCuocUpdate
            return { ...state }
        }
        case 'PLAY_GAME_BAU_CUA': {
            console.log(action)
            const mangXucXacNgauNhien = [];
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6);
                const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien]
                mangXucXacNgauNhien.push(xucXacNgauNhien)
            }
            state.mangXucXac = mangXucXacNgauNhien

            //Xử lí tăng điểm thưởng
            mangXucXacNgauNhien.forEach((xucXacNN, index) => {
                let indexDSCuoc = state.danhSachCuoc.findIndex(qc => qc.ma === xucXacNN.ma);
                if (index !== -1) {
                    state.tongDiem += state.danhSachCuoc[indexDSCuoc].diemCuoc;
                }
            })
            //Xử lí hoàn tiền
            state.danhSachCuoc.forEach((qc, index) => {
                let indexXucXacNN = mangXucXacNgauNhien.findIndex(xxnn => xxnn.ma === qc.ma)
                if (indexXucXacNN !== -1) {
                    state.tongDiem += qc.diemCuoc
                }
            })
            //Xử lí làm mới game
            state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
                return { ...qc, diemCuoc: 0 }
            })
            return { ...state }
        }
        case 'CHOI_LAI': {
            state.tongDiem = 1000;
            //Xử lí làm mới game
            state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
                return { ...qc, diemCuoc: 0 }
            })
            return { ...state }
        }


        default:
            return { ...state }
    }
}
