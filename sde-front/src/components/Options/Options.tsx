import { MoreOutlined } from '@ant-design/icons';
import { Col, Dropdown, Menu, Row } from 'antd';
import { FC } from 'react';
import { setDarkTheme, setLightTheme } from '../helper/changeLayoutAppearance';

const { Item } = Menu;

const Options: FC = () => {
    const menu = (
        <Menu>
            <Item key="0" onClick={setDarkTheme}>
                Escuro
            </Item>
            <Item key="1" onClick={setLightTheme}>
                Claro
            </Item>
            <Item key="2" onClick={setLightTheme}>
                Mendel
            </Item>
        </Menu>
    );

    return (
        <Row className="options" justify="space-around" align="middle">
            <Col>
                <Dropdown overlay={menu} trigger={['click']}>
                    <MoreOutlined />
                </Dropdown>
            </Col>
        </Row>
    );
};

export default Options;
