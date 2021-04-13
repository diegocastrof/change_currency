// Elementos
const configSection = document.getElementById('config-prices');
const saveConfig = document.getElementById('btn-save-config');
const configBtn = document.getElementById('btn-change-config');
const dolarBuyInput = document.getElementById('dolar-buy-input');
const dolarSellInput = document.getElementById('dolar-sell-input');
const euroBuyInput = document.getElementById('euro-buy-input');
const euroSellInput = document.getElementById('euro-sell-input');
const btnChangeConfig = document.getElementById('btn-change-config');
const resultList = document.getElementById('result-list');
// Table prices
const tableDolarBuy = document.getElementById('table-dolar-buy');
const tableDolarSell = document.getElementById('table-dolar-sell');
const tableEuroBuy = document.getElementById('table-euro-buy');
const tableEuroSell = document.getElementById('table-euro-sell');
// Operations
const operationDolarBuyInput = document.getElementById(
	'operation-dolar-buy-input'
);
const operationDolarSellInput = document.getElementById(
	'operation-dolar-sell-input'
);
const operationEuroBuyInput = document.getElementById(
	'operation-euro-buy-input'
);
const operationEuroSellInput = document.getElementById(
	'operation-euro-sell-input'
);
const dolarBuyResult = document.getElementById('dolar-buy-result');
const dolarSellResult = document.getElementById('dolar-sell-result');
const euroBuyResult = document.getElementById('euro-buy-result');
const euroSellResult = document.getElementById('euro-sell-result');
// Action Buttons
const buyDolarActionBtn = document.getElementById('dolar-buy-btn');
const sellDolarActionBtn = document.getElementById('dolar-sell-btn');
const buyEuroActionBtn = document.getElementById('euro-buy-btn');
const sellEuroActionBtn = document.getElementById('euro-sell-btn');

const App = () => {
	// App variables
	let dolarBuyPrice;
	let dolarSellPrice;
	let euroBuyPrice;
	let euroSellPrice;
	const transactions = [];

	// Change config action
	btnChangeConfig.addEventListener('click', () => {
		configSection.classList.toggle('hidden');
		saveConfig.classList.toggle('hidden');
		configBtn.classList.toggle('hidden');
		// Get saved values
		dolarBuyInput.value = dolarBuyPrice || '';
		dolarSellInput.value = dolarSellPrice || '';
		euroBuyInput.value = euroBuyPrice || '';
		euroSellInput.value = euroSellPrice || '';
	});

	saveConfig.addEventListener('click', () => {
		configSection.classList.toggle('hidden');
		saveConfig.classList.toggle('hidden');
		configBtn.classList.toggle('hidden');
		// Set values
		dolarBuyPrice = dolarBuyInput.value;
		dolarSellPrice = dolarSellInput.value;
		euroBuyPrice = euroBuyInput.value;
		euroSellPrice = euroSellInput.value;
		// Set table values
		tableDolarBuy.textContent = dolarBuyInput.value;
		tableDolarSell.textContent = dolarSellInput.value;
		tableEuroBuy.textContent = euroBuyInput.value;
		tableEuroSell.textContent = euroSellInput.value;
		alert('Cambios guardados!');
	});

	// Operation handeling change input events
	const updateDolarBuyResult = () => {
		const quantity = operationDolarBuyInput.value;
		if (quantity && dolarBuyPrice) {
			dolarBuyResult.value = quantity * dolarBuyPrice;
		} else {
			dolarBuyResult.value = 0;
		}
	};

	const updateDolarSellResult = () => {
		const quantity = operationDolarSellInput.value;
		if (quantity && dolarSellPrice) {
			dolarSellResult.value = quantity * dolarSellPrice;
		} else {
			dolarSellResult.value = 0;
		}
	};

	const updateEuroBuyResult = () => {
		const quantity = operationEuroBuyInput.value;
		if (quantity && euroBuyPrice) {
			euroBuyResult.value = quantity * euroBuyPrice;
		} else {
			euroBuyResult.value = 0;
		}
	};

	const updateEuroSellResult = () => {
		const quantity = operationEuroSellInput.value;
		if (quantity && euroSellPrice) {
			euroSellResult.value = quantity * euroSellPrice;
		} else {
			euroSellResult.value = 0;
		}
	};

	operationDolarBuyInput.addEventListener('keyup', () => {
		updateDolarBuyResult();
	});

	operationDolarSellInput.addEventListener('keyup', () => {
		updateDolarSellResult();
	});

	operationEuroBuyInput.addEventListener('keyup', () => {
		updateEuroBuyResult();
	});

	operationEuroSellInput.addEventListener('keyup', () => {
		updateEuroSellResult();
	});

	// Append element
	const appendListItem = (item) => {
		const node = document.createElement('li');
		const { operation, currency, quantity, totalPrice } = item;
		const text = `${operation} / ${currency} / ${quantity} / Total transacción: ${totalPrice}`;
		node.textContent = text;
		resultList.appendChild(node);
	};

	// Actions buttons
	buyDolarActionBtn.addEventListener('click', () => {
		updateDolarBuyResult();
		if (!dolarBuyPrice) {
			return alert(
				'Ingresar precio de COMPRA DOLARES en Cambiar Configuración'
			);
		}
		if (!dolarBuyResult.value) {
			return alert('Ingresar cantidad de dólares a comprar');
		}
		const confirmed = confirm('¿Seguro que desea COMPRAR DOLARES?');
		if (confirmed) {
			const transaction = {
				operation: 'Comprar',
				currency: 'Dolar',
				quantity: operationDolarBuyInput.value,
				totalPrice: dolarBuyResult.value,
			};

			transactions.push(transaction);
			appendListItem(transaction);
			console.log(transactions);
		}
	});

	sellDolarActionBtn.addEventListener('click', () => {
		updateDolarSellResult();
		if (!dolarSellPrice) {
			return alert('Ingresar precio de VENTA DOLARES en Cambiar Configuración');
		}
		if (!dolarSellResult.value) {
			return alert('Ingresar cantidad de dólares a vender');
		}
		const confirmed = confirm('¿Seguro que desea VENDER DOLARES?');
		if (confirmed) {
			const transaction = {
				operation: 'Vender',
				currency: 'Dolar',
				quantity: operationDolarSellInput.value,
				totalPrice: dolarSellResult.value,
			};
			transactions.push(transaction);
			appendListItem(transaction);
			console.log(transactions);
		}
	});

	buyEuroActionBtn.addEventListener('click', () => {
		updateEuroBuyResult();
		if (!euroBuyPrice) {
			return alert('Ingresar precio de COMPRA EUROS en Cambiar Configuración');
		}
		if (!euroBuyResult.value) {
			return alert('Ingresar cantidad de euros a comprar');
		}
		const confirmed = confirm('¿Seguro que desea COMPRAR EUROS?');
		if (confirmed) {
			const transaction = {
				operation: 'Comprar',
				currency: 'Euro',
				quantity: operationEuroBuyInput.value,
				totalPrice: euroBuyResult.value,
			};
			transactions.push(transaction);
			appendListItem(transaction);
			console.log(transactions);
		}
	});

	sellEuroActionBtn.addEventListener('click', () => {
		updateEuroSellResult();
		if (!euroSellPrice) {
			return alert('Ingresar precio de VENTA EUROS en Cambiar Configuración');
		}
		if (!euroSellResult.value) {
			return alert('Ingresar cantidad de euros a vender');
		}
		const confirmed = confirm('¿Seguro que desea VENDER EUROS?');
		if (confirmed) {
			const transaction = {
				operation: 'Vender',
				currency: 'Euro',
				quantity: operationEuroSellInput.value,
				totalPrice: euroSellResult.value,
			};
			transactions.push(transaction);
			appendListItem(transaction);
			console.log(transactions);
		}
	});
};

App();
