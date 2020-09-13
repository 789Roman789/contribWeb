import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { PanelHeaderClose, Footer, Input, FormLayout, Select, File } from '@vkontakte/vkui';
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
import Icon24Camera from '@vkontakte/icons/dist/24/camera';

const osName = platform();

const TargFee = ({ id, go, n, later }) => (
	<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={go} data-to="type">
				{osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
			</PanelHeaderButton>}
		>
			{n}
			</PanelHeader>
		<Group title="Buttons">
			<FormLayout>
				<File top="Load your photo" before={<Icon24Camera />} controlSize="l">
					Open gallery
				</File>
				<Input top="Fee`s name" type="text" placeholder="Fee`s name" />
				<Input top="Amount" type="number" placeholder="Amount" />
				<Input top="Target" type="text" placeholder="For example, to heal a person" />
				<Input top="Description" type="text" placeholder="Where would money go, and how exactly they would help" />
				<Select value={0} top="Who will get the money">
					<option value={0}>Vk Pay 12345</option>
					<option value={1}>Vk Pay 68465</option>
					<option value={2}>Vk Pay 11111</option>
					<option value={3}>Vk Pay 64653</option>
				</Select>
			</FormLayout>
			<Button level="2" size="xl" onClick={go} data-to={later}>Continue</Button>
		</Group>
	</Panel>
);

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
