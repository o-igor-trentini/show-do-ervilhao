import { Button, Card, Col, Layout, Row, Select, Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import { Difficulties } from '../types/enum';
import MendelIcon from './MendelIcon/MendelIcon';
import Options from './Options/Options';

const { Option } = Select;

const Home: FC = () => {
    return (
        <Layout>
            <Content>
                <Row justify="space-around" align="middle" className="background-primary">
                    <Col
                        xxl={{ span: 6 }}
                        xl={{ span: 8 }}
                        lg={{ span: 12 }}
                        md={{ span: 16 }}
                        sm={{ span: 18 }}
                        xs={{ span: 22 }}
                    >
                        <Card className="home-card">
                            <Row justify="space-around" align="middle" gutter={[8, 8]}>
                                <Col span={24} className="home-card-image center-everything">
                                    <MendelIcon />
                                </Col>

                                <Col span={12}>
                                    <Row justify="space-around" align="middle">
                                        <Col span={24}>
                                            <Typography>Dificuldade</Typography>
                                        </Col>

                                        <Col span={24}>
                                            <Select defaultValue={Difficulties[1].value} className="w-100">
                                                {Difficulties.map((item, index) => {
                                                    return (
                                                        <Option key={index} value={item.value}>
                                                            {item.label}
                                                        </Option>
                                                    );
                                                })}
                                            </Select>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24} />
                                <Col span={12}>
                                    <Button type="primary" className="w-100">
                                        Jogar
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Content>
            <Options />
        </Layout>
    );
};

export default Home;
