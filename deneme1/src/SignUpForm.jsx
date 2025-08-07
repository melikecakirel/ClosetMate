import React, { useState } from "react";
import "./AuthForm.css";

const iller = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya",
  "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur",
  "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne",
  "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane",
  "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu",
  "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya",
  "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu",
  "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat",
  "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak",
  "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın",
  "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
];

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    city: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert("Giriş başarılı (demo)");
    } else {
      alert("Kayıt başarılı (demo)");
    }
  };

  return (
    <div className="auth-container">
      <div className="form-wrapper">
        <h2 style={{ textAlign: "center" }}>
          {isLogin ? "Giriş Yap" : "Kayıt Ol"}
        </h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-12">
              <label>İsim:</label><br />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className = "w-full p-8"
              />
            </div>
          )}

          <div className= "mb-12">
            <label>E-posta:</label><br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className = "w-full p-8"
            />
          </div>

          <div className= "mb-12">
            <label>Şifre:</label><br />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className = "w-full p-8"
            />
          </div>

          {!isLogin && (
            <>
              <div className= "mb-12">
                <label>Cinsiyet:</label><br />
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Erkek"
                    checked={formData.gender === "Erkek"}
                    onChange={handleChange}
                    required
                  /> Erkek
                </label>{" "}
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Kadın"
                    checked={formData.gender === "Kadın"}
                    onChange={handleChange}
                  /> Kadın
                </label>{" "}
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Diğer"
                    checked={formData.gender === "Diğer"}
                    onChange={handleChange}
                  /> Diğer
                </label>
              </div>

              <div className= "mb-12">
                <label>Şehir:</label><br />
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className = "w-full p-8"
                >
                  <option value="" disabled>Şehir seçiniz</option>
                  {iller.map(il => (
                    <option key={il} value={il}>{il}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          <button
            type="submit"
            style={{ padding: "10px 20px", marginTop: 10, width: "100%" }}
          >
            {isLogin ? "Giriş Yap" : "Kayıt Ol"}
          </button>
        </form>

        <p style={{ marginTop: 15, textAlign: "center" }}>
          {isLogin ? "Hesabınız yok mu?" : "Zaten hesabınız var mı?"}{" "}
          <button
            className="toggle-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Kayıt Olun" : "Giriş Yapın"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
