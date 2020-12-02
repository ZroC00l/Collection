function degreesToRadians(degrees){
	return degrees * Math.PI / 180;
}

if(typeof Float32Array != "undefined"){
	glMatrixArray = Float32Array;
}
else {
	if(typeof WebGLFloatArray != "undefined"){
		glMatrixArray = WebGLFloatArray;
	}
	else{
		glMatrixArray = Array;
	}
}

window.getAnimationFrame = (function(){
	
	if(window.requestAnimationFrame){
		return window.requestAnimationFrame;
	}
	else if(window.webkitRequestAnimationFrame){
		return window.webkitRequestAnimationFrame;
	}
	else if(window.mozRequestAnimationFrame){
		return window.mozRequestAnimationFrame;
	}
	else{
		return function(callback){
			window.setTimeout(callback, (1000/60));
		}
	}
})();

// create object to handle matrix operations
var mat4 = {};

mat4.createMatrix = function(){
	var newMatrix = new glMatrixArray(16);
	
	return newMatrix;
};

// copy one matrix to another
mat4.setMatrix = function(oldMatrix, newMatrix){
	newMatrix[0] = oldMatrix[0];
	newMatrix[1] = oldMatrix[1];
	newMatrix[2] = oldMatrix[2];
	newMatrix[3] = oldMatrix[3];
	
	newMatrix[4] = oldMatrix[4];
	newMatrix[5] = oldMatrix[5];
	newMatrix[6] = oldMatrix[6];
	newMatrix[7] = oldMatrix[7];
	
	newMatrix[8] = oldMatrix[8];
	newMatrix[9] = oldMatrix[9];
	newMatrix[10] = oldMatrix[10];
	newMatrix[11] = oldMatrix[11];
	
	newMatrix[12] = oldMatrix[12];
	newMatrix[13] = oldMatrix[13];
	newMatrix[14] = oldMatrix[14];
	newMatrix[15] = oldMatrix[15];
	
	return newMatrix;
};

mat4.identityMatrix = function(mtrx){
	mtrx[0] = 1; mtrx[1] = 0; mtrx[2] = 0; mtrx[3] = 0;
	mtrx[4] = 0; mtrx[5] = 1; mtrx[6] = 0; mtrx[7] = 0;
	mtrx[8] = 0; mtrx[9] = 0; mtrx[10] = 1; mtrx[11] = 0;
	mtrx[12] = 0; mtrx[13] = 0; mtrx[14] = 0; mtrx[15] = 1;
	
	return mtrx;
};

// translation operation
mat4.translateMatrix = function(matrix, translateVector){
	var a = translateVector[0]
	var b = translateVector[1];
	var c = translateVector[2];
	
	matrix[12] = (matrix[0] * a) + (matrix[4] * b) + (matrix[8]  * c) + matrix[12];
	matrix[13] = (matrix[1] * a) + (matrix[5] * b) + (matrix[9]  * c) + matrix[13];
	matrix[14] = (matrix[2] * a) + (matrix[6] * b) + (matrix[10] * c) + matrix[14];
	matrix[15] = (matrix[3] * a) + (matrix[7] * b) + (matrix[11] * c) + matrix[15];
	
	return matrix;
};

// ROTATION OPERATIONS

// Rotate x-axis
mat4.rotate_x_axis = function(matrix, theta, otherMatrix){
	var sine = Math.sin(theta);
	var cosine = Math.cos(theta);
	
	var a = matrix[4];
	var b = matrix[5];
	var c = matrix[6];
	var d = matrix[7];
	var e = matrix[8];
	var f = matrix[9];
	var g = matrix[10];
	var h = matrix[11];
	
	if(matrix != otherMatrix && otherMatrix){
		otherMatrix[0] = matrix[0];
		otherMatrix[1] = matrix[1];
		otherMatrix[2] = matrix[2];
		otherMatrix[3] = matrix[3];
		otherMatrix[12] = matrix[12];
		otherMatrix[13] = matrix[13];
		otherMatrix[14] = matrix[14];
		otherMatrix[15] = matrix[15];
	}
		
	otherMatrix[4] = (a * cosine) + (e * sine);
	otherMatrix[5] = (b * cosine) + (f * sine);
	otherMatrix[6] = (c * cosine) + (g * sine);
	otherMatrix[7] = (d * cosine) + (h * sine);
	
	otherMatrix[8] = (a * (-1 * sine)) + (e * cosine);
	otherMatrix[9] = (b * (-1 * sine)) + (f * cosine);
	otherMatrix[10] = (c * (-1 * sine)) + (g * cosine);
	otherMatrix[11] = (d * (-1 * sine)) + (h * cosine);
	
	return otherMatrix;
};

// Rotate y-axis

	mat4.rotate_y_axis = function(matrix, theta, otherMatrix){
	var sine = Math.sin(theta);
	var cosine = Math.cos(theta);
	
	var a = matrix[0];
	var b = matrix[1];
	var c = matrix[2];
	var d = matrix[3];
	var e = matrix[8];
	var f = matrix[9];
	var g = matrix[10];
	var h = matrix[11];
	
	if(matrix != otherMatrix && otherMatrix){
		otherMatrix[4] = matrix[4];
		otherMatrix[5] = matrix[5];
		otherMatrix[6] = matrix[6];
		otherMatrix[7] = matrix[7];
		otherMatrix[12] = matrix[12];
		otherMatrix[13] = matrix[13];
		otherMatrix[14] = matrix[14];
		otherMatrix[15] = matrix[15];
	}
	
	otherMatrix[0] = (a * cosine) + (e * (-1 * sine));
	otherMatrix[1] = (b * cosine) + (f * (-1 * sine));
	otherMatrix[2] = (c * cosine) + (g * (-1 * sine));
	otherMatrix[3] = (d * cosine) + (h * (-1 * sine));
	
	otherMatrix[8] = (a * sine) + (e * cosine);
	otherMatrix[9] = (b * sine) + (f * cosine);
	otherMatrix[10] = (c * sine) + (g * cosine);
	otherMatrix[11] = (d * sine) + (h * cosine);
	
	return otherMatrix;
};

// Rotate z-axis

mat4.rotate_z_axis = function(matrix, theta, otherMatrix){
	var sine = Math.sin(theta);
	var cosine = Math.cos(theta);
	
	var a = matrix[0];
	var b = matrix[1];
	var c = matrix[2];
	var d = matrix[3];
	var e = matrix[4];
	var f = matrix[5];
	var g = matrix[6];
	var h = matrix[7];
	
	if(matrix != otherMatrix && otherMatrix){
		otherMatrix[8] = matrix[8];
		otherMatrix[9] = matrix[9];
		otherMatrix[10] = matrix[10];
		otherMatrix[11] = matrix[11];
		otherMatrix[12] = matrix[12];
		otherMatrix[13] = matrix[13];
		otherMatrix[14] = matrix[14];
		otherMatrix[15] = matrix[15];
	}

	otherMatrix[0] = (a * cosine) + (e * sine);
	otherMatrix[1] = (b * cosine) + (f * sine);
	otherMatrix[2] = (c * cosine) + (g * sine);
	otherMatrix[3] = (d * cosine) + (h * sine);
	
	otherMatrix[4] = (a * (-1 * sine)) + (e * cosine);
	otherMatrix[5] = (b * (-1 * sine)) + (f * cosine);
	otherMatrix[6] = (c * (-1 * sine)) + (g * cosine);
	otherMatrix[7] = (d * (-1 * sine)) + (h * cosine);
	
	return otherMatrix;
};

mat4.rotateMatrixAlt = function(matrx, radians, axisToRotate){
	var x_axis = axisToRotate[0]; var y_axis = axisToRotate[1]; var z_axis = axisToRotate[2];
	
	if(x_axis != 0){
		return mat4.rotate_x_axis(matrx, radians, matrx);
	}
	
	if(y_axis != 0){
		return mat4.rotate_y_axis(matrx, radians, matrx);
	}

	if(z_axis != 0){
		return mat4.rotate_z_axis(matrx, radians, matrx);
	}
};

// Sets up scaling matrix

mat4.scaleMatrix = function(matrix, array){
	var alphaX = array[0];
	var alphaY = array[1];
	var alphaZ = array[2];
	
	matrix[0] = matrix[0]*alphaX;
	matrix[1] = matrix[1]*alphaX;
	matrix[2] = matrix[2]*alphaX;
	matrix[3] = matrix[3]*alphaX;
	
	matrix[4] = matrix[4]*alphaY;
	matrix[5] = matrix[5]*alphaY;
	matrix[6] = matrix[6]*alphaY;
	matrix[7] = matrix[7]*alphaY;
	
	matrix[8] = matrix[8]*alphaZ;
	matrix[9] = matrix[9]*alphaZ;
	matrix[10] = matrix[10]*alphaZ;
	matrix[11] = matrix[11]*alphaZ;
	
	return matrix;
};

// Sets up x-shear

mat4.shear_x_axis = function(matrix, radians){
	var cotangent = 1/Math.tan(radians);		
	
	matrix[4] += matrix[0]*cotangent;
	matrix[5] += matrix[1]*cotangent;
	matrix[6] += matrix[2]*cotangent;
	matrix[7] += matrix[3]*cotangent;
	
	return matrix;
}

// Sets up y-shear

mat4.shear_y_axis = function(matrix, radians){
	var cotangent = 1/Math.tan(radians);		
	
	matrix[8] += matrix[4]*cotangent;
	matrix[9] += matrix[5]*cotangent;
	matrix[10] += matrix[6]*cotangent;
	matrix[11] += matrix[7]*cotangent;
	
	return matrix;
}

// Sets up z-shear

mat4.shear_z_axis = function(matrix, radians){
	var cotangent = 1/Math.tan(radians);		

	matrix[4] += matrix[0]*cotangent;
	matrix[5] += matrix[1]*cotangent;
	matrix[6] += matrix[2]*cotangent;
	matrix[7] += matrix[3]*cotangent;	
	matrix[8] += matrix[4]*cotangent;
	matrix[9] += matrix[5]*cotangent;
	matrix[10] += matrix[6]*cotangent;
	matrix[11] += matrix[7]*cotangent;
	
	return matrix;
}

// Returns the shear matrix

mat4.shearMatrix = function(matrix, radians, axisArray){	
	
	var x_axis = axisArray[0]; 
	var y_axis = axisArray[1]; 
	var z_axis = axisArray[2];
	
	var mtrxX = mat4.shear_x_axis(matrix, radians);
	var mtrxY = mat4.shear_y_axis(matrix, radians);
	var mtrxZ = mat4.shear_z_axis(matrix, radians);
	
	if(x_axis != 0){
		return mtrxX
	}
	
	else if(y_axis != 0){
		return mtrxY
	}

	else if(z_axis != 0){
		return mtrxZ
	}
		
	else if(x_axis != 0 && y_axis != 0){
		return mat4.matrixMultiply(mtrxX, mtrxY);
	}
	
	else if(x_axis != 0 && z_axis != 0){
		return mat4.matrixMultiply(mtrxX, mtrxZ);
	}
	
	else if(y_axis != 0 && z_axis != 0){
		return mat4.matrixMultiply(mtrxY, mtrxZ);
	}
	
	else if(y_axis != 0 && z_axis != 0 && x_axis != 0){
		var mtrx = mat4.matrixMultiply(mtrxX, mtrxY);
		return mat4.matrixMultiply(mtrx, mtrxZ);
	}	
}

// VIEWING MARICES
//mat4.perspective(fovy, aspect, near, far, dest)

mat4.perspective = function(top, right, near, far, pMtrx)
{
	top = near*Math.tan((top * Math.PI)/360);
	right = top * right;

	var left = -1*right;
	var bottom = -1*top

	if(!pMtrx)
	{
		pMtrx = mat4.createMatrix();
	}

	var a = right - left;
	var b = top - bottom;
	var c = far - near;
	
	pMtrx[0] = (2 * near)/a;
	pMtrx[1] = 0;
	pMtrx[2] = 0;
	pMtrx[3] = 0;
	
	pMtrx[4] = 0;
	pMtrx[5] = (near * 2)/b;
	pMtrx[6] = 0;
	pMtrx[7] = 0;
	
	pMtrx[8] = (right + left)/a;  
	pMtrx[9] = (top + bottom)/b;
	pMtrx[10] = ((-1 * (far + near))/c);
	pMtrx[11] = -1;
	
	pMtrx[12] = 0;
	pMtrx[13] = 0;
	pMtrx[14] = ((-1 * (far * near * 2)) / c);
	pMtrx[15] = 0;
	
	return pMtrx;
};

mat4.oblique = function(pMtrx, theta, phi){
	
	if(!pMtrx){
		pMtrx = mat4.createMatrix();
	}

	var t = degreesToRadians(theta);
	var p = degreesToRadians(phi);

	var cotT = -1/Math.tan(t);
	var cotP = -1/Math.tan(p);
	
	pMtrx[0] = 1;
	pMtrx[1] = 0;
	pMtrx[2] = cotT;
	pMtrx[3] = 0;
	pMtrx[4] = 0;
	pMtrx[5] = 1;
	pMtrx[6] = cotP;
	pMtrx[7] = 0;
	pMtrx[8] = 0;
	pMtrx[9] = 0;
	pMtrx[10] = 1;
	pMtrx[11] = 0;
	pMtrx[12] = 0
	pMtrx[13] = 0
	pMtrx[14] = 0
	pMtrx[15] = 1;
	
	mat4.transpose(pMtrx);
	
	return pMtrx;	
}

// mat4.ortho(left, right, bottom, top, near, far, dest)
mat4.ortho = function(left, right, bottom, top, near, far, pMtrx){
	
	if(!pMatrix){
		pMatrix = mat4.createMatrix();
	}

	var a = right - left;
	b = top - bottom;
	c = far - near;
	
	pMtrx[0] = 2/a;
	pMtrx[1] = 0;
	pMtrx[2] = 0;
	pMtrx[3] = 0;
	pMtrx[4] = 0;
	pMtrx[5] = 2/b;
	pMtrx[6] = 0;
	pMtrx[7] = 0;
	pMtrx[8] = 0;
	pMtrx[9] = 0;
	pMtrx[10] = -2/c;
	pMtrx[11] = 0;
	pMtrx[12] = -1*(left + right)/a;
	pMtrx[13] = -1*(top + bottom)/b;
	pMtrx[14] = -1*(far + near )/c;
	pMtrx[15] = 1;
	
	return pMtrx;
};

mat4.matrixMultiply = function(A, B){
	
	mat4.transpose(A);		
	mat4.transpose(B);
			
	var m0 = A[0]*B[0] + A[1]*B[4] + A[2]*B[8] + A[3]*B[12];
	var m1 = A[0]*B[1] + A[1]*B[6] + A[2]*B[9] + A[3]*B[13];
	var m2 = A[0]*B[2] + A[1]*B[6] + A[2]*B[10] + A[3]*B[14];
	var m3 = A[0]*B[3] + A[1]*B[7] + A[2]*B[11] + A[3]*B[15];
	var m4 = A[4]*B[0] + A[5]*B[4] + A[6]*B[8] + A[7]*B[12];
	var m5 = A[4]*B[1] + A[5]*B[5] + A[6]*B[9] + A[7]*B[13];
	var m6 = A[4]*B[2] + A[5]*B[6] + A[6]*B[10] + A[7]*B[14];	
	var m7 = A[4]*B[3] + A[5]*B[7] + A[6]*B[11] + A[7]*B[15];
	var m8 = A[8]*B[0] + A[9]*B[4] + A[10]*B[8] + A[11]*B[12];
	var m9 = A[8]*B[1] + A[9]*B[5] + A[10]*B[9] + A[11]*B[13];
	var m10 = A[8]*B[2] + A[9]*B[6] + A[10]*B[10] + A[11]*B[14];
	var m11 = A[8]*B[3] + A[9]*B[7] + A[10]*B[11] + A[11]*B[15];
	var m12 = A[12]*B[0] + A[13]*B[4] + A[14]*B[8] + A[15]*B[12];
	var m13 = A[12]*B[1] + A[13]*B[5] + A[14]*B[9] + A[15]*B[13];
	var m14 = A[12]*B[2] + A[13]*B[6] + A[14]*B[10] + A[15]*B[14];	
	var m15 = A[12]*B[3] + A[13]*B[7] + A[14]*B[11] + A[15]*B[15];
	
	var m = mat4.createMatrix();
	
	m[0] = m0;
	m[1] = m1;
	m[2] = m2;
	m[3] = m3;
	m[4] = m4;
	m[5] = m5;
	m[6] = m6;
	m[7] = m7;
	m[8] = m8;
	m[9] = m9;
	m[10] = m10;
	m[11] = m11;
	m[12] = m12;
	m[13] = m13;
	m[14] = m14;	
	m[15] = m15;
	
	mat4.transpose(m);
	
    return m;
}

mat4.transpose = function(m){
	
	var n = mat4.createMatrix();
	
	n[0] = m[0];
	n[1] = m[4];
	n[2] = m[8];
	n[3] = m[12];
	n[4] = m[1];
	n[5] = m[5];
	n[6] = m[9];
	n[7] = m[13];
	n[8] = m[2];
	n[9] = m[6];
	n[10] = m[10];
	n[11] = m[14];
	n[12] = m[3];
	n[13] = m[7];
	n[14] = m[11];
	n[15] = m[15];
	
	return n;
}