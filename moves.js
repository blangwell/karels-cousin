const MOVES = {
	s11: {
		up: null,
		down: 's21',
		left: null,
		right: 's12'
	},
	s12: {
		up: null,
		down: 's22',
		left: 's11',
		right: 's13'
	},
	s13: {
		up: null,
		down: 's23',
		left: 's12',
		right: 's14'
	},
	s14: {
		up: null,
		down: 's24',
		left: 's13',
		right: 's15'
	},
	s15: {
		up: null,
		down: 's25',
		left: 's14',
		right: null
	},

	s21: {
		up: 's11',
		down: 's31',
		left: null,
		right: 's22'
	},
	s22: {
		up: 's12',
		down: 's32',
		left: 's21',
		right: 's23'
	},
	s23: {
		up: 's13',
		down: 's33',
		left: 's22',
		right: 's24'
	},
	s24: {
		up: 's14',
		down: 's34',
		left: 's23',
		right: 's25'
	},
	s25: {
		up: 's15',
		down: 's35',
		left: 's24',
		right: null
	},

	s31: {
		up: 's21',
		down: 's41',
		left: null,
		right: 's32'
	},
	s32: {
		up: 's22',
		down: 's42',
		left: 's31',
		right: 's33'
	},
	s33: {
		up: 's23',
		down: 's43',
		left: 's32',
		right: 's34'
	},
	s34: {
		up: 's24',
		down: 's44',
		left: 's33',
		right: 's35'
	},
	s35: {
		up: 's25',
		down: 's45',
		left: 's34',
		right: null
	},

	s41: {
		up: 's31',
		down: 's51',
		left: null,
		right: 's42'
	},
	s42: {
		up: 's32',
		down: 's52',
		left: 's41',
		right: 's43'
	},
	s43: {
		up: 's33',
		down: 's53',
		left: 's42',
		right: 's44'
	},
	s44: {
		up: 's34',
		down: 's54',
		left: 's43',
		right: 's45'
	},
	s45: {
		up: 's35',
		down: 's55',
		left: 's44',
		right: null
	},

	s51: {
		up: 's41',
		down: null,
		left: null,
		right: 's52'
	},
	s52: {
		up: 's42',
		down: null,
		left: 's51',
		right: 's53'
	},
	s53: {
		up: 's43',
		down: null,
		left: 's52',
		right: 's54'
	},
	s54: {
		up: 's44',
		down: null,
		left: 's53',
		right: 's55'
	},
	s55: {
		up: 's45',
		down: null,
		left: 's54',
		right: null
	},
}