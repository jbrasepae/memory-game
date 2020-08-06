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
			expect(h1).not.toBeNull();
		})
		it ('should have div elements', function(){
			var div = browser.window.document.querySelector('div');
			expect(div).not.toBe(null);
		})
		it('game must have 12 cards', function()  {
            const cards = browser.window.document.querySelectorAll('.card');
			expect(cards.length).toEqual(12)
		});
		it("should call checkForMatch function after 1000 milliseconds", function() {
			setTimeout(function() {
			timer();
			},1000);
		})
	});
	
