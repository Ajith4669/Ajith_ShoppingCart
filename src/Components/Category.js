import {
  Space,
  Tooltip,
  Badge,
  Avatar,
  Drawer,
  List,
  Layout,
  Button,
} from "antd";

import React from "react";
import { useState, useEffect } from "react";
import Categories from "./mockdata";
import { Header } from "antd/es/layout/layout";

import { BellFilled } from "@ant-design/icons";

const Category = () => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [data, setData] = useState(Categories);
  const filterItem = (item) => {
    const result = Categories.filter((curData) => {
      return curData.category === item;
    });
    setData(result);
  };
  useEffect(() => {
    setOrders("AI", "VR", "Animations");
  }, []);
  return (
    <Layout>
      <Layout>
        <Header>
          <Space style={{ marginLeft: "90%" }}>
            <Tooltip placement="topLeft" title="Country">
              <Avatar src="../flag.png"></Avatar>
            </Tooltip>
            <p style={{ marginBottom: "2%", fontSize: 15, color: "white" }}>
              EN
            </p>

            <Tooltip placement="topLeft" title="Notification">
              <Badge count={2}>
                <BellFilled
                  style={{ fontSize: 30, color: "orange" }}
                  onClick={() => {
                    setNotificationsOpen(true);
                  }}
                />
              </Badge>
            </Tooltip>
            <br></br>
            <Tooltip placement="topLeft" title="Logout">
              <Avatar src="../human.png"></Avatar>
            </Tooltip>
          </Space>
        </Header>
        <h1>Let's shop</h1>
      </Layout>

      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <button
              className="btn btn-secondary w-100 mb-4"
              onClick={() => filterItem("Men")}
            >
              Men's Collections
            </button>
            <button
              className="btn btn-secondary w-100 mb-4"
              onClick={() => filterItem("Women")}
            >
              Women's Collections
            </button>
            <button
              className="btn btn-secondary w-100 mb-4"
              onClick={() => filterItem("Mobiles")}
            >
              Mobiles
            </button>
            <button
              className="btn btn-secondary w-100 mb-4"
              onClick={() => filterItem("Electronics")}
            >
              Electronics
            </button>
            <button
              className="btn btn-secondary w-100 mb-4"
              onClick={() => filterItem("Gadgets")}
            >
              Gadgets
            </button>
            <button
              className="btn btn-secondary w-100 "
              onClick={() => setData(Categories)}
            >
              All Category
            </button>
          </div>

          <div className="col-md-9">
            <div className="row">
              {data.map((values) => {
                const { id, title, price, image, Descripition, Proccessor } =
                  values;
                return (
                  <>
                    <div className="col-md-4" key={id}>
                      <div className="card">
                        <img src={image} className="card-img-top" />
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <h4> Rs.{price}</h4>
                          <h6> {Descripition}</h6>

                          <p className="card-text">{Proccessor}</p>
                          <button className="btn btn-primary">buy Now</button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => {
          setNotificationsOpen(false);
        }}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return <List.Item>Item ordered!</List.Item>;
          }}
        ></List>
      </Drawer>
    </Layout>
  );
};

export default Category;
