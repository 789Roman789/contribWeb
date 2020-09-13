import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { PanelHeaderClose, Footer, Input, FormLayout, Select, Radio } from '@vkontakte/vkui';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import { platform, IOS } from '@vkontakte/vkui';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/browser_forward';
import './StSheet.css';

const osName = platform();



function TargFee({ id, go, fetchedUser }) {
	const [dateState, setDateState] = useState("1");
	const setds = e => {
		setDateState(e.target.value);
	};
	return (
		<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={go} data-to="type">
				{osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
			</PanelHeaderButton>}
		>
			Additionally
		</PanelHeader>
		<Group title="Buttons">
				<FormLayout>
					<Input top="Author" type="text" defaultValue={fetchedUser ? `${fetchedUser.first_name} ${fetchedUser.last_name}` :'Kirill'} placeholder="Author" />
					<Div top="Fee will end">
						<Radio name="radio" checked={dateState === "1"} onChange={setds} value="1">When sum was collected</Radio>
						<Radio name="radio" checked={dateState === "2"} onChange={setds} value="2">At the exact date</Radio>
				</Div>
				<Input type="date" placeholder="Enter a date" disabled={dateState==="1"} />
			</FormLayout>
			<Button level="2" size="xl" onClick={go} data-to="persik">Continue</Button>
		</Group>
		</Panel>
	);
}
/*const TargFee = ({ id, go, author }) => (
	
);*/

TargFee.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	/*fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),*/
};

export default TargFee;
