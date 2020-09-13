import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { PanelHeaderClose, Footer } from '@vkontakte/vkui';
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
import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';
import './StSheet.css';

const osName = platform();

const TypeSel = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={go} data-to="home">
			{osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
		</PanelHeaderButton>}
		>
			A type off the fee
			</PanelHeader>
		<Group title="Navigation Example">
			<Div>
				<Button align="left" mode="secondary" before={<Icon28TargetOutline />} after={<Icon24BrowserForward className="p-gray" />} size="xl" level="2" onClick={go} data-to="targ">
					<p className="t-main">
						Targeted fee
					</p>
					<p className="t-addition">
						When you have a particular target
					</p>
				</Button>
				<br />
				<Button mode="secondary" before={<Icon28CalendarOutline />} after={<Icon24BrowserForward className="p-gray" />} size="xl" level="2" onClick={go} data-to="regu">
					<p className="t-main">
						Regular fee
						</p>
					<p className="t-addition">
						If each month you need help
					</p>
				</Button>
			</Div>
		</Group>
	</Panel>
);

TypeSel.propTypes = {
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

export default TypeSel;
