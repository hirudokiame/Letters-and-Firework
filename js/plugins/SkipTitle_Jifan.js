//-----------------------------------------------------------------------------
// Scene_Title
//
// The scene class of the title screen.
/*:
 * @plugindesc skip the title screen
 * @author Jifan
*/

function Scene_Title() {
    this.initialize.apply(this, arguments);
}

Scene_Title.prototype = Object.create(Scene_Base.prototype);
Scene_Title.prototype.constructor = Scene_Title;

Scene_Title.prototype.initialize = function() {
    Scene_Base.prototype.initialize.call(this);
};

Scene_Title.prototype.create = function() {
    Scene_Base.prototype.create.call(this);
};

Scene_Title.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    DataManager.setupNewGame();
    this.fadeOutAll();
    SceneManager.goto(Scene_Map);
};




