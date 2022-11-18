import React, { useEffect, useState } from "react";
import {
  DownCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../thunks/userThunks";
import { Button, Input, Dropdown, Menu, Space, Table, Modal } from "antd";
import style from "./User.module.css";
import axios from "axios";
import config from "../../config";
import { authSlice, storeUser } from "../../slices/authSlice";

const { Search } = Input;

const User = () => {
  const onSearch = () => {};

  const users1 = useSelector((state) => state.authSlice.users);
  const [values, setValues] = useState([]);
  const [isModalVisible, setIsModelVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const data = JSON.parse(localStorage.getItem("data"));

  console.log(data.token);
  // const [data1, setdata1] = useState({});
  const [editValues, setEditValues] = useState({
    id: "",
    name: "",
    email: "",
  });
  const dispatch = useDispatch();

  const edit = (rec) => {
    setEditValues({
      id: rec._id,
      name: rec.name,
      email: rec.email,
    });

    setIsModelVisible(true);
  };

  const fn = async (user) => {
    // console.log(user);
    await axios
      .post(
        `${config.API_URL}/admin/users`,
        {},
        {
          headers: {
            user,
          },
        }
      )
      .then((res) => {
        dispatch(storeUser(res.data));
        setValues(users1);
        setIsModalVisible1(true);
      });
  };

  useEffect(() => {
    fn(data.token);
    setIsModalVisible1(false);
    console.log(isModalVisible, isModalVisible1);
  }, [isModalVisible, isModalVisible1, isModalVisible2]);

  const handleOk = async () => {
    await axios
      .put(`${config.API_URL}/user/update`, editValues)
      .then((response) => {
        // will hide the model
        setIsModelVisible(false);
        setIsModalVisible1(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deletes = async (del) => {
    // console.log(del._id);
    if (data.id !== del._id) {
      await axios.post(`${config.API_URL}/user/delete`, del).then((res) => {
        setIsModalVisible2(true);
      });
    }
  };

  const handleCancel = () => {
    setIsModelVisible(false);
    console.log(editValues);
  };
  const handleChange = (e) => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              1st menu item
            </a>
          ),
        },
      ]}
    />
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <h5>
          <img
            src={record.picture}
            alt=""
            style={{ width: "3rem", borderRadius: "50%", marginRight: "5px" }}
          />
          {record.name}
        </h5>
      ),
    },
    {
      title: "Email Id",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },

    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button
            type="primary"
            style={{ borderRadius: "50%" }}
            onClick={() => edit(record)}
          >
            <EditOutlined />
          </Button>
          <Button
            type="danger"
            style={{ borderRadius: "50%" }}
            onClick={() => deletes(record)}
          >
            <DeleteOutlined />
          </Button>
          <p>{record._id}</p>
        </Space>
      ),
    },
  ];
  // const aaa = [
  //   {
  //     key: "1",
  //     name: "vikash",
  //     email: "vikash@gmail.com",
  //     role: "user",
  //     img: "jfj",
  //   },
  // ];

  return (
    <div>
      <div className={style.mainbox}>
        <div className={style.header}>
          <h1 style={{ width: "20rem" }}>Buyers & Suppliers</h1>
          <Search
            placeholder="search for a company"
            onSearch={onSearch}
            enterButton
            style={{ width: "15rem", marginLeft: "35rem" }}
          />

          <Dropdown overlay={menu} className={style.dropdn}>
            <Button onClick={(e) => e.preventDefault()}>
              <Space>
                Add Comapny
                <DownCircleOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
        <div className={style.form}>
          <Dropdown overlay={menu} className={style.dropdns}>
            <Button onClick={(e) => e.preventDefault()}>
              <Space>
                Add Comapny
                <DownCircleOutlined style={{ marginLeft: "10rem" }} />
              </Space>
            </Button>
          </Dropdown>
          <Dropdown overlay={menu} className={style.dropdns}>
            <Button onClick={(e) => e.preventDefault()}>
              <Space>
                Add Comapny
                <DownCircleOutlined style={{ marginLeft: "10rem" }} />
              </Space>
            </Button>
          </Dropdown>
          <Search
            placeholder="search for a company"
            onSearch={onSearch}
            style={{ width: "20rem" }}
          />
        </div>
        <div className={style.lists}>
          <Table columns={columns} dataSource={values} />
          <Modal
            title="Update User"
            visible={isModalVisible}
            onOk={() => handleOk()}
            onCancel={handleCancel}
          >
            <div style={{ textAlign: "center", margin: "1rem" }}>
              Name:
              <input
                type="text"
                name="name"
                value={editValues.name}
                onChange={handleChange}
                className={style.modelinput}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              Email:
              <input
                type="text"
                name="email"
                value={editValues.email}
                onChange={handleChange}
                className={style.modelinput}
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default User;
