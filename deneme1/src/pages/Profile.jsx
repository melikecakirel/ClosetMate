import React, { useState } from 'react';
import "./Profile.css";

function Profile() {
  const [name, setName] = useState("Melike");
  const [email, setEmail] = useState("melike@gmail.com");

  const [activeForm, setActiveForm] = useState("none");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSaveInfo = () => {
    alert("Bilgiler Güncellendi!");
    setActiveForm("none");
  };

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage("Lütfen tüm alanları doldurunuz.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage("Şifreler eşleşmiyor.");
      return;
    }
    setMessage("Şifre değiştirildi!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="profile-container">
      <h2>Profilim</h2>

      <div className="info-group">
        <p><strong>İsim:</strong> {name}</p>
        <p><strong>E-posta:</strong> {email}</p>
      </div>

      <div className="button-group">
        <button onClick={() => setActiveForm('edit')}>Bilgilerimi Düzenle</button>
        <button onClick={() => setActiveForm('password')}>Şifre Değiştir</button>
      </div>

      {activeForm === 'edit' && (
        <div className="form-group">
          <label>İsim:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>E-posta:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleSaveInfo}>Kaydet</button>
        </div>
      )}

      {activeForm === "password" && (
        <>
          <div className="form-group">
            <label>Mevcut Şifre:</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Yeni Şifre:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Yeni Şifre Tekrar:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button onClick={handleChangePassword}>Şifreyi Kaydet</button>

          {message && <p className="message">{message}</p>}
        </>
      )}
    </div>
  );
}

export default Profile;

