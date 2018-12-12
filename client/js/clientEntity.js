

 Scia = function(x,y)
 {
    var self = 
    {
        num: Scia.list.length,
        x:x,
        y:y,
        size:4,
    }
 
    
    self.update = function()
    {
        self.size -= 0.2;
        if(self.size <= 0)
        {
            var index = Scia.list.indexOf(self);
            Scia.list.splice(index,1);
        }
        return "";
        
    }
 
    self.draw = function()
    {
        drawSprite(sprScia,self.x-camera.xView,self.y-camera.yView,0,self.size);
    }


    Scia.list[self.num] = self;
    return self;
 }
 Scia.list = [];



 
 Onda = function(x,y)
 {
    var self = 
    {
        num: Onda.list.length,
        x:x,
        y:y,
        grow:false,
        maxSize: 4,
        size:0,
        speed : Math.random()*2
    }
 
    
    self.update = function()
    {
        self.x += self.speed;
        
        if(self.grow)
        {
            self.size -= 0.05;
            if(self.size <= 0)
            {
                var index = Onda.list.indexOf(self);
                Onda.list.splice(index,1);
            }
        }
        else
        {
            if(self.size <= self.maxSize)
            {self.size += 0.05;}
            else
            {self.grow = true;}
        }
        
    }
 
    self.draw = function()
    {
        drawSprite(sprOnda,self.x-camera.xView,self.y-camera.yView,0,self.size);
    }


    Onda.list[self.num] = self;
    return self;
 }
 Onda.list = [];