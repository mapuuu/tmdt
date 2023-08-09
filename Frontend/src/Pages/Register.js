import React, { useState } from 'react';
import { ReactComponent as LoginImage } from '../login.svg';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar.js';
import Layout from './Layout.js';
import Uploader from '../Upload/Uploader';
import { useDispatch } from 'react-redux';
import { registerAction } from '../Redux/Actions/userActions.js';
import toast from 'react-hot-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    images: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Gọi action đăng ký và chờ kết quả trả về
      await dispatch(registerAction(formData));
      // Nếu thành công, hiển thị toast thành công và chuyển đến trang login
      toast.success('Đăng ký thành công!');
      navigate('/login');
    } catch (error) {
      // Nếu thất bại, hiển thị toast lỗi
      toast.error('Đăng ký thất bại. Vui lòng thử lại!');
      navigate('/register');
    }
  };

  return (
    <Layout>
      <div className="w-full">
        <div className="w-5/6 mx-auto my-[10px]">
          <div className="flex w-11/12 mx-auto bg-gray-100  rounded-lg overflow-hidden">
            <div className="w-[50%]  ">
              <form
                onSubmit={handleSubmit}
                action=""
                className="w-[50%] mx-auto py-[30px]"
              >
                <div className="flex flex-col items-center">
                  <p className="font-medium text-xl">Đăng ký</p>
                </div>
                <div className="flex flex-col gap-y-[12px] mt-[30px]">
                  <div>
                    <label className="font-medium block">Họ và tên *</label>
                    <input
                      className="outline-none w-full flex items-center pl-[10px] h-[30px] rounded placeholder:opacity-30 placeholder:font-thin placeholder:italic"
                      type="text"
                      placeholder="Nhập họ và tên"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="font-medium block">Email *</label>
                    <input
                      className="outline-none w-full flex items-center pl-[10px] h-[30px] rounded placeholder:opacity-30 placeholder:font-thin placeholder:italic"
                      type="email"
                      placeholder="Nhập địa chỉ email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block font-medium">Mật khẩu *</label>
                    <input
                      className="outline-none w-full flex items-center pl-[10px] h-[30px] rounded placeholder:opacity-30 placeholder:font-thin placeholder:italic"
                      type="password"
                      placeholder="********"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  {/* phoneNumber */}
                  <div>
                    <label className="block font-medium">Số điện thoại *</label>
                    <input
                      className="outline-none w-full flex items-center pl-[10px] h-[30px] rounded placeholder:opacity-30 placeholder:font-thin placeholder:italic"
                      type="text"
                      placeholder="Nhập số điện thoại"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Địa chỉ */}
                  <div>
                    <label className="block font-medium">Địa chỉ *</label>
                    <input
                      className="outline-none w-full flex items-center pl-[10px] h-[30px] rounded placeholder:opacity-30 placeholder:font-thin placeholder:italic"
                      type="text"
                      placeholder="Nhập địa chỉ"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex flex-row-reverse">
                    <p
                      className="font-medium text-sm"
                      style={{ color: '#7F56D9' }}
                    >
                      Quên mật khẩu?
                    </p>
                  </div>

                  <button
                    className="w-full h-[30px] rounded font-medium"
                    style={{ backgroundColor: '#7F56D9' }}
                  >
                    Đăng ký
                  </button>

                  <button className="flex items-center bg-white w-full  h-[30px] my-[10px] rounded gap-x-[10px] justify-center">
                    <FaFacebook className="text-blue-400 text-xl" />
                    <p className="font-medium">Đăng ký bằng Facebook</p>
                  </button>

                  <button className="flex items-center bg-white w-full  h-[30px] rounded gap-x-[10px] justify-center">
                    <FcGoogle className="text-xl" />
                    <p className="font-medium">Đăng ký bằng Google</p>
                  </button>

                  <div className="flex justify-center">
                    <p className="font-thin text-black/50">
                      Đã có tài khoản?{' '}
                      <Link to="/login" className="font-medium text-blue-400 ">
                        Đăng nhập
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div className="w-[50%]  flex items-center justify-center">
              <LoginImage className="" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
