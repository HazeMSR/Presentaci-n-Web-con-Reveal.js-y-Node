
exports.index = function(req, res){
  res.render('index', { title: 'Calcular',
          });
};
exports.mrua = function(req, res){
  res.render('mrua', { title: 'Movimiento rectilineo Uniformemente acelerado',
          });
};
