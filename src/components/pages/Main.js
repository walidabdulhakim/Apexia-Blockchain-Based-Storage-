import React, { Component } from 'react';
import { convertBytes } from '../elements/helpers';
import moment from 'moment'

class Main extends Component {

  render() {
    return (
      <div className="container-fluid mt-5 text-center" id="main">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              <div className="card mb-3 mx-auto " style={{ backgroundColor:"#0B093B", maxWidth: '824px',height:'400px',border:'1px',borderRadius:'55px' }}>
                <h2 className="text-white font40 extraBold" style={{marginTop:'20px'}}><b> Upload File</b></h2>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    this.props.uploadFile(description)
                  }} >
                      <div className="form-group font40 ">
                        <br></br>
                          <input 
                          style={{maxWidth:'412px', marginLeft:'206px',marginBottom:'60px'}}

                            id="fileDescription"
                            type="text"
                            ref={(input) => { this.fileDescription = input }}
                            className="form-control "
                            placeholder="File Name..."
                            required />
                      </div>
                    <input type="file" onChange={this.props.captureFile} className="text-white "/>
                    <button type="submit" className="btn-primary btn-block" style={{backgroundColor:'#7620ff',marginTop:'60px',maxWidth:'200px',marginLeft:'306px',height:'40px', borderRadius:'55px'}}><b>Upload!</b></button>
                  </form>
              </div>
              <p>&nbsp;</p>
              <table className="table-sm table-bordered font40" style={{ width: '1000px', maxHeight: '450px'}}>
                <thead style={{ 'fontSize': '15px', }}>
                  <tr style={{backgroundColor:"gray",color:"white"}}>
                    <th scope="col" style={{ width: '10px'}}>id</th>
                    <th scope="col" style={{ width: '200px'}}>name</th>
                    <th scope="col" style={{ width: '230px'}}>description</th>
                    <th scope="col" style={{ width: '120px'}}>type</th>
                    <th scope="col" style={{ width: '90px'}}>size</th>
                    <th scope="col" style={{ width: '90px'}}>date</th>
                    <th scope="col" style={{ width: '120px'}}>uploader/view</th>
                    <th scope="col" style={{ width: '120px'}}>hash/view/get</th>
                  </tr>
                </thead>
                { this.props.files.map((file, key) => {
                  return(
                    <thead style={{ 'fontSize': '12px' }} key={key}>
                      <tr>
                        <td style={{color:'black'}}>{file.fileId}</td>
                        <td style={{color:'black'}}>{file.fileName}</td>
                        <td style={{color:'black'}}>{file.fileDescription}</td>
                        <td style={{color:'black'}}>{file.fileType}</td>
                        <td style={{color:'black'}}>{convertBytes(file.fileSize)}</td>
                        <td style={{color:'black'}}>{moment.unix(file.uploadTime).format('Y')}</td>
                        <td>
                          <a
                            href={"https://etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0,10)}...
                          </a>
                         </td>
                        <td>
                          <a
                            href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.fileHash.substring(0,10)}...
                          </a>
                        </td>
                      </tr>
                    </thead>
                  )
                })}
              </table>
            </div>
          </main>
        </div>
        
      </div>
    );
  }
}

export default Main;