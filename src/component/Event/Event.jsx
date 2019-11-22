import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      alamat: "",
      hobi: "",
      umur: null
    };
  }

  onSubmitHandler = event => {
    event.preventDefault();
    let umur = this.state.umur;
    if (!Number(umur)) {
      alert("silahkan isi usia anda terlebih dahulu");
    }
  };

  onChangeHandler = event => {
    let nama = event.target.name;
    let alamat = event.target.alamat;
    let hobi = event.target.hobi;
    let val = event.target.value;
    this.setState({
      [nama]: val,
      [alamat]: val,
      [hobi]: ""
    });
  };

  render() {
    return (
      <div className="wraperform w-50">
        <form onSubmit={this.onSubmitHandler} className="my-2">
          <div className="form-group">
            <h1>Halo {this.state.nama}</h1>
            <input type="text" className="form-control" onChange={this.onChangeHandler} name="nama" placeholder="Nama kamu" />
          </div>
          <div className="form-group">
            <h1>Sebutkan Salah satu Hobi Kamu {this.state.hobi}</h1>
            <input type="text" onChange={this.onChangeHandler} name="hobi" className="form-control" placeholder="masukan hobi kamu" required />
          </div>
          <div className="form-group">
            <h1>Umur kamu adalah {this.state.umur}</h1>
            <input type="text" onChange={this.onChangeHandler} name="umur" className="form-control" placeholder="isi usia anda" required />
          </div>
          <div className="form-group">
            <h1>Alamat tinggal {this.state.alamat}</h1>
            <textarea onChange={this.onChangeHandler} name="alamat" className="textarea form-control" placeholder="masukan alamat lengkap"></textarea>
          </div>
          <hr />
          <input type="submit" onClick={this.updateState} value="simpan data" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default Form;
