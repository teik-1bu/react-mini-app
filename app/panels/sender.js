import React from 'react';
import './sender.css'
import UserAvatar from '../images/user_avatar.png';

const Sender = () => (
	<div className="sender-page v2 fixed">
    <div className="flex-wrapper">
      <div className="user-info">
        <div className="inside">
          <p className="avatar">
            <img src={UserAvatar} alt="user avatar"></img>
          </p>
          <p className="name">Nguyen Van B</p>
          <p className="phone">012****789</p>
        </div>
      </div>
      <div className="serder-frm-block style__1">
        <div className="frm-block">
          <div className="bank-frm-txt money">
            <a className="btn-delete"></a>
            <input className="tel" />
            <label>Số Tiền</label>
            <span className="unit">đ</span>
          </div>
          <div className="input-amount">
            <p className="input-amount-number">10000</p>
          </div>
          <div className="bank-frm-txt message">
            <div className="box">
              <a className="delete-btn"></a>
              <a className="edit-btn"></a>
              <textarea placeholder="Nội dung chuyển tiền" className="message-input"></textarea>
            </div>
          </div>
        </div>

      </div>
      <div className="btn-block outside">
        <a className="btn-style blue">Tiếp tục</a>
      </div>

    </div>
  </div>
);

Sender.propTypes = {
};

export default Sender;
