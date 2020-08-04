const {JSDOM} = require('jsdom');

	describe('memory_game.html', function(){
		var browser;

		beforeEach (function(done){
			JSDOM.fromFile('./src/memory_game.html',{

			}).then(function(res){
				browser = res;
				done();
			})

		})
		afterEach(function(){
			browser.window.close();
		})
		it('should have a <h1> element', function(){
			var h1 = browser.window.document.querySelector('h1');
			expect(h1).not.toBe(null);
		})
	})
