describe('Los estudiantes login', function() {
	it('Visits los estudiantes and fails at login', function() {
		cy.visit('https://losestudiantes.co')
		cy.contains('Cerrar').click()
		// Lineas nuevas
		cy.screenshot('Ingreso erroneo - antes')
		cy.contains('Ingresar').click()
		cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
		cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
		cy.get('.cajaLogIn').contains('Ingresar').click()
		cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
		//cerrar ventana de inicio de sesión
		cy.get('.cajaLogIn').find('input[name="password"]').click().type('{esc}')
		cy.screenshot('Ingreso erroneo - despues')

		// Cree una cuenta  Registro exitoso!
		/*
		cy.contains('Ingresar').click()
		cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Juan")
		cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Mojica")
		cy.get('.cajaSignUp').find('input[name="correo"]').click().type("jc.mojicap@uniandes.edu.co")
		cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('Universidad de los Andes').should('have.value', 'universidad-de-los-andes')
		cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Ingeniería de Sistemas y Computación').should('have.value', '12')
		cy.get('.cajaSignUp').find('input[name="password"]').click().type("myPassword123")
		cy.get('.cajaSignUp').find('input[name="acepta"]').check()  
		cy.get('.cajaSignUp').contains('Registrarse').click()
		cy.contains('Registro exitoso!')
		cy.contains('Ok').click()
		*/

		//pruebe el login correcto
		cy.screenshot('Ingreso correcto - antes')
		cy.contains('Ingresar').click()
		cy.get('.cajaLogIn').find('input[name="correo"]').click().type("jc.mojicap@uniandes.edu.co")
		cy.get('.cajaLogIn').find('input[name="password"]').click().type("myPassword123")
		cy.get('.cajaLogIn').contains('Ingresar').click()
		cy.screenshot('Ingreso correcto - despues')

		//Cerrar sesión
		cy.get('#cuenta').click()
		cy.contains('Salir').click()



		// la creación de una cuenta con un login que ya existe		
		cy.screenshot('Creacion cuenta - antes')
		cy.contains('Ingresar').click()
		cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Juan")
		cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Mojica")
		cy.get('.cajaSignUp').find('input[name="correo"]').click().type("jc.mojicap@uniandes.edu.co")
		cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('Universidad de los Andes').should('have.value', 'universidad-de-los-andes')
		cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('Ingeniería de Sistemas y Computación').should('have.value', '12')
		cy.get('.cajaSignUp').find('input[name="password"]').click().type("myPassword123")
		cy.get('.cajaSignUp').find('input[name="acepta"]').check()  
		cy.get('.cajaSignUp').contains('Registrarse').click()
		cy.contains('Ocurrió un error activando tu cuenta')
		cy.contains('Ok').click()
		cy.screenshot('Creacion cuenta - despues')
		//cerrar ventana de inicio de sesión
		cy.get('.cajaLogIn').find('input[name="password"]').click().type('{esc}')
		

		//Pruebe la funcionalidad de búsqueda de profesores
		//Pruebe como dirigirse a la página de un profesor
		cy.get('.Select-arrow-zone').click()
		cy.get('.Select-control').find('input').should('not.be.visible').type("Dario Correal")
		cy.get('.Select-menu-outer').first().should("contain", "Dario Correal").click()
	
		//Pruebe los filtros por materia en la página de un profesor		
		cy.get('.materias').contains('Solucion').siblings('input').click()

	})
})